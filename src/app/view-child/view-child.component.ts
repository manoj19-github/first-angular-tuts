import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent {
  @ViewChild('dobInput') dateOfBirth: ElementRef | undefined;
  @ViewChild('ageInput') age: ElementRef | undefined;
  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth?.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age!.nativeElement.value = age;
  }
}
