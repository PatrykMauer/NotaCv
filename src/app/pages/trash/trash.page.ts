import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
})
export class TrashPage implements OnInit {

  public user:User;

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(user=>this.user=user);
  }

}
