import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialModuleArr = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialModuleArr
  ],
  exports : [
    ...MaterialModuleArr
  ]
})
export class MaterialModule { }
