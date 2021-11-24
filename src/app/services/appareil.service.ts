import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
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

  constructor() {}
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
}
