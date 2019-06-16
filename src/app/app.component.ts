import {Component, ViewChild} from '@angular/core';
import {Person} from './classes/person';
import {Address} from './classes/address';
import {PersonComponent} from './person/person.component';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public person: Person = new Person('Jhon', ' Doh ');


@ViewChild(PersonComponent) per: PersonComponent
  child(){
  return this.per.chield()
  }
 private  age = 30;

  private address: Address = new Address('rue du Paradis', '75010 Paris');

  private alignement = 'right';
  private color = 'green';
  private compteur;
   maTaille=10;
  modifierPersonne = () => {
    this.person.nom = 'klarman';
    this.person.prenom = 'Olivier';
  }
  myValueChange =(event)=>{
    console.log(event);
    this.compteur=event;
  }
// interaction
  characters= [
    {nom:'mickey', prenom:'mouse'},

    {nom:'djibi', prenom:'diop'},
    {nom:'kylian', prenom:'nbappe'},
    {nom:'donald', prenom:'duck'},
  ]
  disable:boolean =false
  theBest:any
  isSelected(person):void{
    this.theBest=person
    this.disable=true
  }
}
