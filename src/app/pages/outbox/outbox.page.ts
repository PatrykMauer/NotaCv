import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.page.html',
  styleUrls: ['./outbox.page.scss'],
})
export class OutboxPage implements OnInit {

  public user:User;

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(user=>this.user=user);
  }

}
