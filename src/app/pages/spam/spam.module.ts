import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { SpamPageRoutingModule } from "./spam-routing.module";
import { SpamPage } from "./spam.page";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [IonicModule, SpamPageRoutingModule, SharedModule],
  declarations: [SpamPage],
})
export class SpamPageModule {}
