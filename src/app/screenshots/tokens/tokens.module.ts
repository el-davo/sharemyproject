import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokensComponent } from './tokens.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TokensComponent, ListComponent]
})
export class TokensModule { }
