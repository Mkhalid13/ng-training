import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private _router: Router) { }
  canActivate(): boolean {

    if (this.auth.isLoggedIn()) {
      this._router.navigate(['/articles'])
      return false
    } else {
      return true
    }
  }

}

