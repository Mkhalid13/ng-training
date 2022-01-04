import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  RegisterForm = {
    FullName: "",
    GenderId: "",
    Age: "",
    CountryId: "",
    Email: "",
    Qualification: "",
    YearOfQualifications: "",
    StudyTagweed: "",
    TeachQuranBefore: "",
    Readings: [{ "ReadingId": 1 }, { "ReadingId": 3 }],
    password: "",
    AppLangId: "",
    PartsNumber: "",
    WeekHours: "",
    DonationSkills: "",
    VoiceURL: ""
  }

  ngOnInit(): void {
  }

  TeacherRegister(form: NgForm){
    console.log(form.value)

    this.http.post(`${environment.fa_baseURL}Teachers/Add`, this.RegisterForm).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
