import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFashionComponent } from './app-fashion/app-fashion.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppFashionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot([
      {
          path: '',
          component: AppHomeComponent
      },
      {
          path: 'fashion',
          component: AppFashionComponent

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
