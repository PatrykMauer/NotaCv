import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  public user:User;

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(user=>this.user=user);
  }

}
