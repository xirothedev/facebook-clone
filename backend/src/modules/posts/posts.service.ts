import { Injectable, InternalServerErrorException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Request } from 'express';
import { PrismaService } from '@/prisma/prisma.service';
import { SupabaseService } from '@/supabase/supabase.service';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService, private readonly supabaseService: SupabaseService) { }

  async create(req: Request, body: CreatePostDto, medias: Express.Multer.File[]) {
    if (!req.user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    const mediaUrls: string[] = [];
    for (const file of medias) {
      const path = `${req.user.id}/${Date.now()}-${file.originalname}`;
      const { error } = await this.supabaseService.uploadFile(path, file.buffer, {
        contentType: file.mimetype,
      });

      if (error) {
        throw new InternalServerErrorException(`Failed to upload file: ${file.originalname}`);
      }
      const { data } = this.supabaseService.getPublicUrl(path);
      mediaUrls.push(data.publicUrl);
    }

    const post = await this.prismaService.post.create({
      data: {
        authorId: req.user.id,
        content: body.content,
        medias: mediaUrls,
        scope: body.scope,
        status: "DISPLAY"
      },
      include: { author: true, comments: true, reactions: true }
    });

    return {
      message: "Create post successful",
      data: post
    }
  }

  async findById(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id,
        status: 'DISPLAY'  // Only return active posts
      },
      include: {
        author: true,
        comments: true,
        reactions: true
      }
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return {
      message: "Get post successful",
      data: post
    };
  }

  async update(id: string, req: Request, updatePostDto: UpdatePostDto, medias: Express.Multer.File[]) {
    if (!req.user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    const post = await this.prismaService.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (post.authorId !== req.user.id) {
      throw new UnauthorizedException('You are not allowed to edit this post');
    }

    let mediaUrls: string[] = [];
    if (medias && medias.length > 0) {
      for (const file of medias) {
        const path = `${req.user.id}/${Date.now()}-${file.originalname}`;
        const { error } = await this.supabaseService.uploadFile(path, file.buffer, {
          contentType: file.mimetype,
        });

        if (error) {
          throw new InternalServerErrorException(`Failed to upload file: ${file.originalname}`);
        }
        const { data } = this.supabaseService.getPublicUrl(path);
        mediaUrls.push(data.publicUrl);
      }
    }

    // Handle media updates: remove deleted URLs and add new ones
    let updatedMedias = [...post.medias];

    // Remove URLs that are marked for deletion
    if (updatePostDto.deletedUrls && updatePostDto.deletedUrls.length > 0) {
      updatedMedias = updatedMedias.filter(url => !updatePostDto.deletedUrls!.includes(url));
    }

    // Add new uploaded media URLs
    if (mediaUrls.length > 0) {
      updatedMedias = [...updatedMedias, ...mediaUrls];
    }

    const updated = await this.prismaService.post.update({
      where: { id },
      data: {
        ...updatePostDto,
        medias: updatedMedias
      },
      include: { author: true, comments: true, reactions: true }
    });

    return {
      message: 'Update post successful',
      data: updated
    };
  }

  async remove(id: string, req: Request) {
    if (!req.user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    const post = await this.prismaService.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (post.authorId !== req.user.id) {
      throw new UnauthorizedException('You are not allowed to delete this post');
    }

    // Soft delete by updating status to DELETED
    const deleted = await this.prismaService.post.update({
      where: { id },
      data: { status: 'DELETED' },
      include: { author: true, comments: true, reactions: true }
    });

    return {
      message: 'Delete post successful',
      data: deleted
    };
  }
}
