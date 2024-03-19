import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user';
  constructor() {}

  login() {
    localStorage.setItem(this.USER_KEY, 'loggedIn');
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.USER_KEY) === 'loggedin';
  }
}
