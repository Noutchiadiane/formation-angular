import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  lastUpdate: Promise<Date> = null!;
  appareilSubscription!: Subscription;
  appareils: any[] = [];

  constructor(private AppareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    this.appareilSubscription = this.AppareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.AppareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.AppareilService.switchOnAll();
  }
  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.AppareilService.switchOffAll();
    }
  }
  onSave() {
    this.AppareilService.saveAppareilsToServer();
  }
  onFetch() {
    this.AppareilService.getAppareilsFromServer();
  }
}
