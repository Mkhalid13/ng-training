import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  constructor(private http: HttpClient, private toaster: ToastrService) { }

  userEmail:string
  resetPassForm: boolean = false
  forgetPassForm: boolean = true

  forgetPass(form: NgForm) {

    this.http.post(`${environment.fa_baseURL}Account/ForgotPassword`, form.value).subscribe(
      res => {
        this.toaster.success(res['message'])
        this.resetPassForm = true
        this.forgetPassForm = false
      },
      error => {
        this.toaster.error(error.error.message)
      }
    )
  }

  resetPass(form: NgForm) {

    this.http.post(`${environment.fa_baseURL}Account/ResetPassword`, form.value).subscribe(
      res => {
        this.toaster.success(res['message'])
      },
      error => {
        this.toaster.error(error.error.message)
      }
    )
  }


  ngOnInit(): void {
  }

}
