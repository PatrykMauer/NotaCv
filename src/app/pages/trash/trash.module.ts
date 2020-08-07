import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrashPageRoutingModule } from './trash-routing.module';

import { TrashPage } from './trash.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    TrashPageRoutingModule,
    SharedModule
  ],
  declarations: [TrashPage]
})
export class TrashPageModule {}
