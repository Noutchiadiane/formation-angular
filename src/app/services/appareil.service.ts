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
}
