import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [NavComponent, HeaderComponent], // Export components for use in other modules
})
export class SharedModule { }
