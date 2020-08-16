import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/models/IUser";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { paths } from "src/app/models/paths";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit, OnDestroy {
  public user: IUser;
  private userSub: Subscription;

  constructor(private dataService: UserService, private router: Router) {}

  ngOnInit() {
    this.dataService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  onEdit() {
    this.router.navigateByUrl(paths.editAccount);
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
