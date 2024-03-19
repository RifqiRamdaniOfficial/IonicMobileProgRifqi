import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authService: AuthService) {}
  username: string = '';
  password: string = '';
  login() {
    // Anda dapat menambahkan logika validasi di sini
    if (this.username === 'user' && this.password === 'password') {
      // Login berhasil, redirect ke halaman beranda
      this.authService.login();
    } else {
      // Tampilkan pesan kesalahan jika login gagal
    }
  }
}
