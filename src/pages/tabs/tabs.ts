import { HomePage } from './../home/home';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'ProfilePage';
  tab3Root = 'WishlistPage';
  tab4Root = 'CartPage';

  constructor() {

  }
}
