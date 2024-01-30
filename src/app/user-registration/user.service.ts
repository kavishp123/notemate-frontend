import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user-registration/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient,private cookieService: CookieService) {}

  addUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/adduser`, user);
  }
  loginUser(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  storeUserDetailsInCookies(userDetails: any): void {
    console.log('Storing user details in cookies:', userDetails);

    this.cookieService.set('user_id', userDetails.user_id);
    this.cookieService.set('username', userDetails.username);

    console.log('User details stored in cookies:', this.cookieService.getAll());
  }

  getUserDetailsFromCookies(): any {
    // Retrieve user details from cookies
    const userDetailsString = this.cookieService.get('userDetails');
    return userDetailsString ? JSON.parse(userDetailsString) : null;
  }

  logout(): void {
    // Remove user details from cookies on logout
    this.cookieService.delete('userDetails');
  }
}

