import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

// contentChildren est sette
  ngAfterContentInit(): void {
    // on recupère les tabs actifs
    let activeTabs = this.tabs.filter((tab) => tab.active);
    // activer le premier s'il n'existe pas
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactive tout les tabs
    console.log(tab.title)
    this.tabs.toArray().forEach(tab => tab.active = false);
    //active le tab sur lequle le user a clique
    tab.active = true;
  }
}


