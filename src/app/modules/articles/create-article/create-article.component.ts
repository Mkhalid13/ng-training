import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  form = {
    SouraId: "1",
    CatName: "",
    ArticleDetails: [
      {
        Details: "",
        Title: "",
        LanguageId: 1,
        Created: "1/2/2022"
      },
      {
        Details: "",
        Title: "",
        LanguageId: 2,
        Created: "1/1/2022"
      }
    ]
  }

  formErrors: string = ""

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  addArticle(form: NgForm) {

    this.form.CatName = form.value.CatName;
    this.form.ArticleDetails[0].Details = form.value.articleDetails_ar;
    this.form.ArticleDetails[1].Details = form.value.articleDetails_en;
    this.form.ArticleDetails[0].Title = form.value.articleTitle_ar;
    this.form.ArticleDetails[1].Title = form.value.articleTitle_en;


    if (!this.formErrors) {
      console.log('success');
      this.http.post(`${environment.fa_baseURL}Articles/Add`, this.form).subscribe((response) => {
        console.log(response)
      })
    }
    else {
      console.log('error')
      this.formErrors = 'error'
    }
  }

}
