import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {
    this.element = element;
    // element.nativeElement.style.backgroundColor = 'red';
  }
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
