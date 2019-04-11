import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteDetailPage } from './cliente-detail';

@NgModule({
  declarations: [
    ClienteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteDetailPage),
  ],
})
export class ClienteDetailPageModule {}
