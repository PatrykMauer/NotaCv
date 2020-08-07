import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ArchivedPageRoutingModule } from './archived-routing.module';
import { ArchivedPage } from './archived.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    ArchivedPageRoutingModule,
    SharedModule
  ],
  declarations: [ArchivedPage]
})
export class ArchivedPageModule {}
