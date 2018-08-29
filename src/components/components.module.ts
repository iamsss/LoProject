import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { MenuListComponent } from './menu-list/menu-list';
@NgModule({
	declarations: [MenuListComponent],
	imports: [ IonicModule],
	exports: [MenuListComponent]
})
export class ComponentsModule {}
