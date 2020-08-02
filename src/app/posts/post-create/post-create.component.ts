import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  constructor(public postService: PostsService) {}
  onSavePost(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.reset();
  }
}
