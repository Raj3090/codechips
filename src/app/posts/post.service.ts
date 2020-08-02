import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postCreated = new Subject<Post[]>();

  getPosts() {
    return this.posts;
  }

  getPostUpdateListener() {
    return this.postCreated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content,
    };
    this.posts.push(post);
    this.postCreated.next([...this.posts]);
  }
}
