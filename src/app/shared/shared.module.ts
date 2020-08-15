import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AvatarComponent } from "./avatar/avatar.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [AvatarComponent, CommonModule, RouterModule],
})
export class SharedModule {}
