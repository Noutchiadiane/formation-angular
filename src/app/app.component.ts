import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate: Promise<Date> = null!;

  posts: Post[] = [
    new Post(
      'Mon premier post',
      'Formation Angular OpenClassroom',
      2,
      new Date('2011/10/22')
    ),
    new Post(
      'Mon deuxième post',
      'Formation Springboot spring-clout OpenClassroom',
      1,
      new Date('2011/10/22 22:00')
    ),
    new Post(
      'Encore un post',
      'Toutes mes formation sur openclassroom',
      0,
      new Date('2011/10/22 15:00')
    ),
  ];
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      console.log(date);
      setTimeout(() => {
        resolve(date);
      }, 2000);
    });
  }
  onAllumer() {
    console.log('On allume tout !');
  }
}
