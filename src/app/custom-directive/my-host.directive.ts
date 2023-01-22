import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMyHost]',
})
export class MyHostDirective {
  constructor(private element: ElementRef, renderer: Renderer2) {}
  @HostBinding('style.background') background = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.background = 'pink';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.background = 'transparent';
  }
}
