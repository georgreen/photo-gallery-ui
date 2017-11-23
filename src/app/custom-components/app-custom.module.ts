import { NgModule } from '@angular/core';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppPhotoCardComponent } from './app-photo-card/app-photo-card.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { SidebarItemComponent } from './app-sidebar/sidebar-item/sidebar-item.component';

@NgModule({
  exports: [
    AppNavbarComponent,
    AppPhotoCardComponent,
    AppSidebarComponent
  ],
  declarations: [
    SidebarItemComponent,
    AppNavbarComponent,
    AppPhotoCardComponent,
    SidebarItemComponent]
})
export class AppCustomModule { }
