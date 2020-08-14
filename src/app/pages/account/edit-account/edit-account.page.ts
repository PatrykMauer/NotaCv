import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { Subscription } from "rxjs";

import { User } from "../../../models/user";
import { paths } from "../../../shared/paths";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-edit-account",
  templateUrl: "./edit-account.page.html",
  styleUrls: ["./edit-account.page.scss"],
})
export class EditAccountPage implements OnInit, OnDestroy {
  private userSub: Subscription;
  private photoSub: Subscription;
  formIsEdited: boolean = false;
  user: User;
  selectedPhoto: string;
  editProfileForm: FormGroup;

  @ViewChild("updateForm", { static: false }) updateForm: FormGroupDirective;

  constructor(
    private dataService: DataService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.userSub = this.dataService.getUser().subscribe(user => {
      this.user = user;
      if (!this.user) {
        this.router.navigateByUrl(paths.account);
      }

      this.editProfileForm = new FormGroup({
        username: new FormControl(this.user.username, Validators.required),
        firstName: new FormControl(this.user.firstName, Validators.required),
        lastName: new FormControl(this.user.lastName, Validators.required),
        email: new FormControl(this.user.email, Validators.required),
        phone: new FormControl(this.user.phone, Validators.required),
        describtion: new FormControl(
          this.user.describtion,
          Validators.required
        ),
        gender: new FormControl(this.user.gender, Validators.required),
      });

      this.editProfileForm.valueChanges.subscribe(values => {
        this.formIsEdited = true;
      });
    });

    this.photoSub = this.dataService.getSelectedPhoto().subscribe(photo => {
      if (photo) {
        this.selectedPhoto = photo;
      }
    });
  }

  submitForm() {
    this.updateForm.onSubmit(undefined);
  }

  async updateAccount(values: User) {
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: '<ion-img class="spinner" src="assets/notaCv.gif"></ion-img>',
        spinner: null,
        cssClass: "custom-loading",
      })
      .then(loadingEl => {
        loadingEl.present();

        setTimeout(() => {
          values.photo = this.selectedPhoto
            ? this.selectedPhoto
            : this.user.photo;
          let updatedUser: User = { ...values };
          const userUpdated = this.dataService.updateUser(updatedUser);

          loadingEl.dismiss();

          if (userUpdated != null) {
            this.router.navigateByUrl(paths.account);
          }
        }, 1000);
      });

    this.router.navigateByUrl(paths.account);
  }

  onEdited() {
    this.formIsEdited = true;
    this.router.navigateByUrl(paths.gallery);
  }

  onCancel() {
    this.dataService.selectPhoto(null);
    this.router.navigateByUrl(paths.account);
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }

    if (this.photoSub) {
      this.photoSub.unsubscribe();
    }
  }
}
