import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Misalnya, kita melakukan validasi sederhana
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
