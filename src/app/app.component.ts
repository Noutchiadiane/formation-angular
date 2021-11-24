import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate: Promise<Date> = null!;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Frigo',
      status: 'allumé',
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
    },
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
