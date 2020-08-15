import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { GalleryPageRoutingModule } from "./gallery-routing.module";
import { GalleryPage } from "./gallery.page";
import { PhotoService } from "src/app/services/photo.service";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GalleryPageRoutingModule],
  declarations: [GalleryPage],
  providers: [PhotoService],
})
export class GalleryPageModule {}
