import { Component } from '@angular/core';

@Component({
  selector: 'app-seaarch',
  templateUrl: './seaarch.component.html',
  styleUrls: ['./seaarch.component.css'],
})
export class SeaarchComponent {
  searchValue: string = 'manoj santra';
  changeHandler(event: Event) {
    console.log('searchValue : ', (<HTMLInputElement>event.target).value);
    this.searchValue = (<HTMLInputElement>event.target).value;
  }
}
