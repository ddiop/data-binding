import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[resizeElement]'
})
export class ResizeElementDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  @Input('resizeElement')  taille: number;
 // @Output() tailleChange = new EventEmitter<number>();

  dec() { this.performTask(-1); }
  inc() { this.performTask(+1); }


  @HostListener('click')
  performTask(delta) {
    console.log('entries'+JSON.stringify(delta))
    this.taille = +this.taille + delta;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', `${this.taille}px`);
  }
}
