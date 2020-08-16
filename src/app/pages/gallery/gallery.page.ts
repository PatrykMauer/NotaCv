import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { PhotoService } from "../../services/photo.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { paths } from "src/app/models/paths";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.page.html",
  styleUrls: ["./gallery.page.scss"],
})
export class GalleryPage implements OnInit {
  paths: IPaths = paths;

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    public dataService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  public async showActionSheet(photo: IPhoto, position) {
    const actionSheet = await this.actionSheetController.create({
      header: "Photos",
      buttons: [
        {
          text: "Set Profile Picture",
          icon: "checkmark-circle",
          handler: () => {
            this.dataService.selectPhoto(
              photo.base64 ? photo.base64 : photo.webviewPath
            );
            this.router.navigateByUrl("/account/edit-account");
          },
        },
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
