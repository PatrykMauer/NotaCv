import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class UserData {
    favorites: string[] = [];
    username: string ="Patryk Mauer"
    constructor(){}

    getUsername():string{
        return this.username;
    }

    setUsername(username:string): void{
        this.username=username;
    }
  }