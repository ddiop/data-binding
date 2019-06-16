import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../classes/person';


let input = Input;

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @input() myperson: any;
  @input() disable: boolean;
  @Output() onChoose = new EventEmitter<Person>();
  djibi = new Person('diop', 'djibi');

  constructor() {

  }

  ngOnInit() {
  }

  chield (){

    return this.djibi;
  };
  choose = () => {
    this.onChoose.emit(this.myperson);
    //return new Person('diop', 'djibi');
  };
}
