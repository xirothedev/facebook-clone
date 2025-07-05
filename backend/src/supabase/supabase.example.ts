import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class ExampleService {
  constructor(private readonly supabaseService: SupabaseService) { }

  /**
   * Example: User Authentication
   */
  async createUser(email: string, password: string) {
    const { data, error } = await this.supabaseService.signUp(email, password, {
      full_name: 'John Doe',
      avatar_url: 'https://example.com/avatar.jpg'
    });

    if (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }

    return data.user;
  }

  async loginUser(email: string, password: string) {
    const { data, error } = await this.supabaseService.signIn(email, password);

    if (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }

    return data.session;
  }

  /**
   * Example: Database Operations
   */
  async getUsers() {
    const { data, error } = await this.supabaseService.select('users', 'id, email, full_name');

    if (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }

    return data;
  }

  async createPost(userId: string, title: string, content: string) {
    const { data, error } = await this.supabaseService.insert('posts', {
      user_id: userId,
      title,
      content,
      created_at: new Date().toISOString()
    });

    if (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }

    return data[0];
  }

  async updatePost(postId: string, updates: any) {
    const { data, error } = await this.supabaseService.update(
      'posts',
      updates,
      { id: postId }
    );

    if (error) {
      throw new Error(`Failed to update post: ${error.message}`);
    }

    return data[0];
  }

  async deletePost(postId: string) {
    const { data, error } = await this.supabaseService.delete('posts', { id: postId });

    if (error) {
      throw new Error(`Failed to delete post: ${error.message}`);
    }

    return data[0];
  }

  /**
   * Example: File Storage
   */
  async uploadUserAvatar(userId: string, file: Buffer) {
    const path = `avatars/${userId}/${Date.now()}.jpg`;

    const { data, error } = await this.supabaseService.uploadFile(
      'user-avatars',
      path,
      file,
      { contentType: 'image/jpeg' }
    );

    if (error) {
      throw new Error(`Failed to upload avatar: ${error.message}`);
    }

    return data.path;
  }

  async getAvatarUrl(userId: string, filename: string) {
    const { data } = this.supabaseService.getPublicUrl(
      'user-avatars',
      `avatars/${userId}/${filename}`
    );

    return data.publicUrl;
  }

  /**
   * Example: Realtime Subscriptions
   */
  setupRealtimePosts() {
    const subscription = this.supabaseService.subscribeToTable(
      'posts',
      '*',
      (payload) => {
        console.log('Post changed:', payload);
        // Handle real-time updates here
        // e.g., notify connected clients via WebSocket
      }
    );

    return subscription;
  }

  /**
   * Example: Complex Queries
   */
  async getPostsWithUserInfo() {
    // Using the raw client for complex queries
    const client = this.supabaseService.getClient();

    const { data, error } = await client
      .from('posts')
      .select(`
        *,
        users (
          id,
          email,
          full_name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch posts with user info: ${error.message}`);
    }

    return data;
  }

  /**
   * Example: Error Handling
   */
  async safeDatabaseOperation<T>(
    operation: () => Promise<{ data: T | null; error: any }>
  ): Promise<T> {
    const { data, error } = await operation();

    if (error) {
      // Log the error for debugging
      console.error('Database operation failed:', error);

      // You might want to send this to an error tracking service
      // await this.errorTrackingService.captureException(error);

      throw new Error(`Database operation failed: ${error.message}`);
    }

    if (!data) {
      throw new Error('No data returned from database operation');
    }

    return data;
  }
} 