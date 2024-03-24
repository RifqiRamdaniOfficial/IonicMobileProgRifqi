import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuhuPage } from '../suhu/suhu.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  navigateTo() {
    this.router.navigate(['/suhu']);
  }
}
