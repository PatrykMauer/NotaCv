import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrashPageRoutingModule } from './trash-routing.module';

import { TrashPage } from './trash.page';
import { AvatarModule } from 'src/app/avatar/avatar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashPageRoutingModule,
    AvatarModule
  ],
  declarations: [TrashPage]
})
export class TrashPageModule {}
