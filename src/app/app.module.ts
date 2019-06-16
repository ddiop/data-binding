import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { MaTailleComponent } from './ma-taille.component';
import { ResizeElementDirective } from './resize-element.directive';
import { PersonComponent } from './person/person.component';
import {FormsModule} from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    MaTailleComponent,
    ResizeElementDirective,
    PersonComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
