import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  slogan: string = 'hello this is manoj santra we develop fantastic web app';
  imgSrc: string = '../../assets/myimg.jpg';
  showMyName: boolean = false;
  hideImage: boolean = false;
  name: string = 'Hi myself Manoj Santra';
  getSlogan() {
    return 'this is a new slogan for this web app';
  }
  closeImage() {
    this.hideImage = true;
  }
}
