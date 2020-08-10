import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { User } from "src/app/models/user";
import { Subscription } from "rxjs";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit, OnDestroy {
  public user: User;
  private userSub: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUser().subscribe(user => {
      this.user = user;

      console.log(user);
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
