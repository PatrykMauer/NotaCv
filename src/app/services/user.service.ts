import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { IUser } from "../models/IUser";
import { Plugins } from "@capacitor/core";
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _selectedPhoto = new BehaviorSubject<string>(null);
  private _user = new BehaviorSubject<IUser>({
    firstName: "Patryk",
    lastName: "Mauer",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFDagqj7fgQVg/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=qOoci5KrxNnZGr6l1SJ2t53gfSzaMusPMxyvvgXZYSA",
    describtion: "Going forward is the only direction.",
    username: "PatrykMauer",
    phone: "516 501 402",
    email: "patryk.mauer@gmail.com",
    gender: "Male",
  });
  constructor() {}

  getUser() {
    return this._user.asObservable();
  }

  updateUser(user: IUser): IUser {
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
