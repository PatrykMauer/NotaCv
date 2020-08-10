import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class DataService {
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

  constructor(private http: HttpClient) {}

  get user() {
    return this._user.asObservable();
  }

  getUser() {
    return this.user;
  }

  updateUser(user: User) {
    this._user.next(user);
  }

  updatePhoto(photo: string) {
    return this.user
      .pipe(
        take(1),
        tap(user => {
          console.log("tap works");

          const updatedUser = new User(
            user.firstName,
            user.lastName,
            photo,
            user.describtion,
            user.username,
            user.phone,
            user.email,
            user.gender
          );
          this._user.next(updatedUser);
        })
      )
      .subscribe();
  }
}
