import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss'],
})
export class PostListItemComponentComponent implements OnInit {
  @Input()
  postItem: Post = {
    title: '',
    content: '',
    loveIts: 0,
    createdAt: new Date(),
  };

  setLoveState = false;
  constructor() {}

  ngOnInit(): void {}

  upVote() {
    this.postItem.loveIts++;
  }
  downVote() {
    this.postItem.loveIts--;
  }
}
