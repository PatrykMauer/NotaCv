import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { Subscription } from "rxjs";

import { IUser } from "../../../models/IUser";
import { paths } from "../../../models/paths";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-edit-account",
  templateUrl: "./edit-account.page.html",
  styleUrls: ["./edit-account.page.scss"],
})
export class EditAccountPage implements OnInit, OnDestroy {
  private userSub: Subscription;
  private photoSub: Subscription;
  formIsEdited: boolean = false;
  user: IUser;
  selectedPhoto: string;
  editProfileForm: FormGroup;

  @ViewChild("updateForm", { static: false }) updateForm: FormGroupDirective;

  constructor(
    private dataService: UserService,
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

  submitForm(): void {
    this.updateForm.onSubmit(undefined);
  }

  async updateAccount(values: IUser) {
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
          let updatedUser: IUser = { ...values };
          if (updatedUser != null) {
            this.dataService.updateUser(updatedUser);
          }

          loadingEl.dismiss();

          this.router.navigateByUrl(paths.account);
        }, 1000);
      });
  }

  onEdited(): void {
    this.formIsEdited = true;
    this.router.navigateByUrl(paths.gallery);
  }

  onCancel(): void {
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
