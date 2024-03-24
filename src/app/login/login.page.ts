import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Ganti dengan validasi yang sesuai, ini hanya contoh sederhana
    if (this.username === 'admin' && this.password === 'admin123') {
      // Simpan informasi login di localStorage
      localStorage.setItem('username', this.username);
      // Redirect ke halaman lain setelah login berhasil
      this.router.navigate(['/home']);
    } else {
      alert('Username atau password salah!');
    }
  }
}
