import { DataServiceProvider } from './../../providers/data-service/data-service';
import { Component } from '@angular/core';

/**
 * Generated class for the MenuListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})
export class MenuListComponent {

  pages: any;
  showLevel1 = null;
  showLevel2 = null;

  constructor( dataService: DataServiceProvider) {
    dataService.getMenus()
    .subscribe((response)=> {
        this.pages = response;
        console.log(this.pages);
    });
  }

  
  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };
  
  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };
  
  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };
}
