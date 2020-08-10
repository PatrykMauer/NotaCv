import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { User } from "src/app/models/user";
import { Subscription } from "rxjs";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit, OnDestroy {
  public user: User;
  private userSub: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUser().subscribe(user => (this.user = user));
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
