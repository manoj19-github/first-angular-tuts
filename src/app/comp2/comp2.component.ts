import { Component } from '@angular/core';
import { CustomService } from '../services/myservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  constructor(private custom: CustomService) {}
  onMessageShow(title: string) {
    this.custom.showMessage(title);
  }
}
