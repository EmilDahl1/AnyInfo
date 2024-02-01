import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, HeaderComponent],
})
export class SharedModule { }