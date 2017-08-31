import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensComponent} from './tokens.component';
import {ListComponent} from './list/list.component';
import {TokensActions} from './tokens.actions';
import {EmptyComponent} from './list/empty/empty.component';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {AppCommonModule} from '../../common/common.module';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module';
import {AddComponent} from './modal/add/add.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {ClrDropdownModule} from 'clarity-angular/popover/dropdown/dropdown.module';
import { DeleteComponent } from './modal/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    AppCommonModule,
    ClrLoadingModule,
    ClrModalModule,
    ClrDropdownModule
  ],
  declarations: [
    TokensComponent,
    ListComponent,
    EmptyComponent,
    AddComponent,
    DeleteComponent
  ],
  providers: [
    TokensActions
  ]
})
export class TokensModule {
}
