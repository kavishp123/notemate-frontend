// login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.userService.loginUser(loginData).subscribe(
        (response: any) => {
          // Handle successful login response
          console.log(response);

          // Store user details in cookies
          this.userService.storeUserDetailsInCookies(response);

          // Navigate to the notes page after successful login
          this.router.navigate(['/fetch-user-notes']);
        },
        (error: any) => {
          // Handle login error
          console.error(error);
        }
      );
    }
  }
}


