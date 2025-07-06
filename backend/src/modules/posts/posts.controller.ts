import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, UploadedFiles } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { MediasInterceptor } from '@/common/interceptors/media.interceptor';
import { Request } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  @UseInterceptors(MediasInterceptor("medias"))
  create(@Req() req: Request, @Body() body: CreatePostDto, @UploadedFiles() medias: Express.Multer.File[],) {
    return this.postsService.create(req, body, medias);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.postsService.findById(id);
  }

  @Patch(':id')
  @UseInterceptors(MediasInterceptor("medias"))
  update(@Param('id') id: string, @Req() req: Request, @Body() updatePostDto: UpdatePostDto, @UploadedFiles() medias: Express.Multer.File[]) {
    return this.postsService.update(id, req, updatePostDto, medias);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.postsService.remove(id, req);
  }
}
