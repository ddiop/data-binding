import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  private compteur : number=0;
  @Output()
  counterChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  inc = () =>{
    this.compteur++;
    this.counterChange.emit(this.compteur);
  }
  desc = () => {
    this.compteur--;
    this.counterChange.emit( this.compteur);

  }
}
