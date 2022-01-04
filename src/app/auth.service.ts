import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  Login(email: string, password: string) {
    let params: HttpParams = new HttpParams()
      .set('public_key', 'akooonadmin')
      .set('token', '621de6a1edbbb596e030db92f5545008')
      .set('timestamp', '123456')

    let formData = new FormData()
    formData.append("email", email);
    formData.append("password", password);
    console.log(formData)

    return this.http.post(`${environment.baseURL}login/`, formData, { params: params })
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  logout() {
    localStorage.clear();
  }

  // Fatiha Login
  faLogin(username: string, password: string) {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    };
    let params = new HttpParams({
      fromObject: { username: username, password: password, grant_type: "password" },
    });

    return this.http.post(`${environment.fa_baseURL_1}Token`, params.toString(), httpOptions)
  }
}
