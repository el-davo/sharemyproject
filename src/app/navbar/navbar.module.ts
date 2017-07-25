import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {ClrNavigationModule} from 'clarity-angular/layout/nav/navigation.module';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {ClrDropdownModule} from 'clarity-angular/popover/dropdown/dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClrNavigationModule,
    ClrIconModule,
    ClrDropdownModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
