import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Material from "@angular/material";
const mat_ang:any[] =[
  Material.MatToolbarModule,
  Material.MatGridListModule,
  Material.MatRadioModule,
  Material.MatSelectModule,
  Material.MatFormFieldModule,
  Material.MatDatepickerModule,
  Material.MatNativeDateModule,
  Material.MatCheckboxModule,
  Material.MatInputModule
];
@NgModule({

  imports: [ mat_ang ],
  exports:[ mat_ang ]
})
export class MaterialModule { }
