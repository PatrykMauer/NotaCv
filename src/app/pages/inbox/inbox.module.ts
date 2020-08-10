import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { InboxPageRoutingModule } from "./inbox-routing.module";
import { InboxPage } from "./inbox.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [IonicModule, SharedModule, InboxPageRoutingModule],
  declarations: [InboxPage],
})
export class InboxPageModule {}
