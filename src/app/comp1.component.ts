import {Component, Input, OnInit} from '@angular/core';
import {Address} from './classes/address';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
   monAddress: Address;
}
