import { NgModule } from '@angular/core';
import { MdCheckboxModule,
         MdButtonModule,
         MdSidenavModule,
         MdGridListModule,
         MdIconModule,
         MdToolbarModule,
         MdSelectModule,
         MdExpansionModule,
         MdListModule,
         MdCardModule,
         MdInputModule
       } from '@angular/material';


@NgModule({
  exports: [
    MdCheckboxModule,
    MdButtonModule,
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdToolbarModule,
    MdListModule,
    MdSelectModule,
    MdExpansionModule,
    MdCardModule,
    MdInputModule
  ]
})
export class MaterialComponentsModule { }
