import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from './material-components/material-components.module';

import { AppHomeComponent } from './app-home/app-home.component';
import { AppFashionComponent } from './app-fashion/app-fashion.component';
import { AppComponent } from './app.component';

import { AppNavbarComponent } from './custom-components/app-navbar/app-navbar.component';
import { AppPhotoCardComponent } from './custom-components/app-photo-card/app-photo-card.component';
import { AppSidebarComponent } from './custom-components/app-sidebar/app-sidebar.component';
import { AppCustomModule } from './custom-components/app-custom.module';
import { SidebarItemComponent } from './custom-components/app-sidebar/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppFashionComponent,
    AppNavbarComponent,
    AppPhotoCardComponent,
    AppSidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialComponentsModule,
    RouterModule.forRoot([
      {
          path: '',
          component: AppHomeComponent
      },
      {
          path: 'fashion',
          component: AppFashionComponent

      },
      {
        path: '**',
        component: AppHomeComponent

      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
