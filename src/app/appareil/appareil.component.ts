import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName = '';
  @Input() appareilStatus = 'eteint';
  @Input() index: number = 0;
  @Input() id: number = 0;
  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
