import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    HomeComponent
  ]
})
export class HomeModule { }
