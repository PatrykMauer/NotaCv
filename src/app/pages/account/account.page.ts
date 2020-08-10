import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  public user: User;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUser().subscribe(user => (this.user = user));
  }
}
