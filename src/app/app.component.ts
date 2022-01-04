import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router) {

  }
  title = 'akoon';
  isLoggedIn: boolean = false


  ngOnInit(): void {
    this.checkUserLogin()

    this.router.events.subscribe(() => {
      this.checkUserLogin()
    });
  }

  checkUserLogin() {
    if (this.auth.isLoggedIn()) {
      this.isLoggedIn = true
    }
  }

  logout() {
    this.auth.logout()
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }
}

