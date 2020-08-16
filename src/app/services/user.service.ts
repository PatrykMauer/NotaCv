import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { User } from "../models/user";
import { Plugins } from "@capacitor/core";
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _selectedPhoto = new BehaviorSubject<string>(null);
  private _user = new BehaviorSubject<User>(
    new User(
      "Patryk",
      "Mauer",
      "https://media-exp1.licdn.com/dms/image/C4E03AQFDagqj7fgQVg/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=qOoci5KrxNnZGr6l1SJ2t53gfSzaMusPMxyvvgXZYSA",
      "Going forward is the only direction.",
      "PatrykMauer",
      "516 501 402",
      "patryk.mauer@gmail.com",
      "Male"
    )
  );

  constructor() {}

  getUser() {
    return this._user.asObservable();
  }

  updateUser(user: User): User {
    this._user.next(user);
    return;
  }

  getSelectedPhoto() {
    return this._selectedPhoto.asObservable();
  }

  selectPhoto(selectedPhoto: string) {
    this._selectedPhoto.next(selectedPhoto);
  }
}
