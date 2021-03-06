import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/models/IUser";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { paths } from "../../models/paths";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit, OnDestroy {
  public user: IUser;
  private userSub: Subscription;

  constructor(private dataService: UserService, private router: Router) {}

  ngOnInit() {
    this.dataService.getUser().subscribe(user => (this.user = user));
  }

  onAvatar(): void {
    this.router.navigateByUrl(paths.account);
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
