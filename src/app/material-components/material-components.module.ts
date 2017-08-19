import { NgModule } from '@angular/core';
import { MdCheckboxModule, MdButtonModule } from '@angular/material';

@NgModule({
  exports: [
    MdCheckboxModule,
    MdButtonModule
  ]
})
export class MaterialComponentsModule { }
