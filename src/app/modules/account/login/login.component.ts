import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  form = {
    email: "",
    password: "",
  }

  ValidateLogin(form: NgForm) {

    // let params: HttpParams = new HttpParams()
    //   .set('public_key', 'akooonadmin')
    //   .set('token', '621de6a1edbbb596e030db92f5545008')
    //   .set('timestamp', '123456')

    // let formData = new FormData()
    // formData.append("email", form.value.email);
    // formData.append("password", form.value.password);

    // this.http.post(`${environment.baseURL}login/`, formData, { params: params }).subscribe(res => {
    //   if (res['status']) {
    //     this.toaster.success('Logged in successfully!')
    //     localStorage.setItem('token', '621de6a1edbbb596e030db92f5545008')
    //   } else {
    //     this.toaster.error(`${res['errors']}`)
    //   }
    // })

    this.auth.Login(form.value.email, form.value.password).subscribe(res => {
      if (res['status']) {
        this.toaster.success('Logged in successfully!')
        localStorage.setItem('token', '621de6a1edbbb596e030db92f5545008')
        this.router.navigate(['/articles'])
      } else {
        this.toaster.error(`${res['errors']}`)
      }
    })
  }



}
