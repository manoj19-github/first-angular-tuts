import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent {
  sayHello(inputElement: HTMLInputElement) {
    inputElement.focus();
    // alert('hello ' + inputElement.value);
  }
}
