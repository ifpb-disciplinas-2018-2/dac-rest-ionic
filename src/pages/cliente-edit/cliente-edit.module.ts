import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteEditPage } from './cliente-edit';

@NgModule({
  declarations: [
    ClienteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteEditPage),
  ],
})
export class ClienteEditPageModule {}
