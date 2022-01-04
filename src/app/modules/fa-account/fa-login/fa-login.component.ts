import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-fa-login',
  templateUrl: './fa-login.component.html',
  styleUrls: ['./fa-login.component.scss']
})
export class FaLoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private auth: AuthService,
    private router: Router
  ) { }

  form = {
    username: "",
    password: "",
  }

  ValidateLogin(form: NgForm) {

    this.auth.faLogin(form.value.username, form.value.password).subscribe(
      res => {
        console.log(res)
        this.toaster.success('Success')
      },
      error => {
        console.log(error.error)
        this.toaster.error(error.error.error_description)
      }
    )


  }

  ngOnInit(): void {
  }

}
