import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'ma-taille',
  templateUrl: './ma-taille.component.html',
  styleUrls: ['./ma-taille.component.css']
})
export class MaTailleComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @Input()  taille: number;
  @Output() tailleChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.taille = +this.taille + delta;
    this.tailleChange.emit(this.taille);
  }

}
