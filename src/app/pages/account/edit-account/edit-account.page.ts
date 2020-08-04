import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  public user: User;
  updateContactForm: FormGroup;
  formIsEdited: boolean = false;

  @ViewChild('updateForm', { static: false }) updateForm: FormGroupDirective;


  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(user => this.user = user);

    this.updateContactForm = new FormGroup({
      'username': new FormControl(this.user.username, Validators.required),
      'firstName': new FormControl(this.user.firstName, Validators.required),
      'lastName': new FormControl(this.user.lastName, Validators.required),
      'email': new FormControl(this.user.email),
      'phone': new FormControl(this.user.phone, Validators.required),
      'describtion': new FormControl(this.user.describtion, Validators.required)
    });

    this.updateContactForm.valueChanges.subscribe(values => {
    this.formIsEdited = true;
    })
  }

  submitForm() {
    this.updateForm.onSubmit(undefined);
  }

  async updateContact(values: any) {
    let updatedContact: User = { ...values };
    const userUpdated = await this.dataService.updateContact(updatedContact);
    if ( userUpdated != null) {
      this.router.navigate(['/account']);
    }
  }
}