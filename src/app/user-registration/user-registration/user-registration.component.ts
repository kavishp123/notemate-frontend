// user-registration.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router // Inject the Router service
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: User = this.userForm.value;
      this.userService.addUser(userData).subscribe(
        response => {
          console.log(response); // Handle success

          // Redirect to the login page after successful registration
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error); // Handle error
        }
      );
    }
  }
}


