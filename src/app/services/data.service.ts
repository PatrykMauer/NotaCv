import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user : User

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    if(this.user){
      return of(this.user);
    }
    else{
      return this.http.get<User>('../../assets/user.json')
      .pipe(tap(user=> this.user = user));
    }
  }

  updateContact(user: User): User {
    this.user = user;
    return user;
  }

  updatePhoto(photo:Photo)
  {
    this.user.photo=photo.base64;
  } 
}
