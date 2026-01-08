import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Header} from '../../shared/components/header/header';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    Header
  ]
})
export class AuthModule { }
