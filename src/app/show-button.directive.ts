import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowButton]'
})
export class ShowButtonDirective {

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.children[1].style.visibility = 'visible';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.children[1].style.visibility = 'hidden';
  }

  constructor(private el: ElementRef) { }

}
