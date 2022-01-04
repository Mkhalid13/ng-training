import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleId: number;
  articleDetails;

  form = {
    Id: "",
    SouraId: "1",
    CatName: "",
    Created: "1/1/2020",
    ArticleDetails: [
      {
        ArticleId: "",
        Details: "",
        Title: "",
        LanguageId: 1,
        Created: "1/2/2022",
        Updated: "2/2/2022"
      },
      {
        ArticleId: "",
        Details: "",
        Title: "",
        LanguageId: 2,
        Created: "1/1/2022",
        Updated: "2/2/2022"
      }
    ]
  }

  formErrors: string = ""

  constructor(private http: HttpClient, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['articleId'];
    this.getArticleDetails();
  }

  // get article details
  getArticleDetails() {
    this.http.get
      (`${environment.fa_baseURL}Articles/GetById/${this.articleId}`)
      .subscribe(res => {
        if (res['StatusId'] == 200) {
          console.log(res['data'])
          this.articleDetails = res['data']
          this.form.Id = res['data'].Id

          this.form.ArticleDetails[0].ArticleId = res['data'].ArticleDetails[0].ArticleId
          this.form.ArticleDetails[1].ArticleId = res['data'].ArticleDetails[1].ArticleId
        }
      })
  }

  getCurrentLang(lang:number) {
    return (lang == 1) ? 'ar' : 'en'
  }

  // update article
  updateArticle(form: NgForm) {

    this.form.CatName = form.value.CatName;
    this.form.ArticleDetails[0].Details = form.value.articleDetails_ar;
    this.form.ArticleDetails[1].Details = form.value.articleDetails_en;
    this.form.ArticleDetails[0].Title = form.value.articleTitle_ar;
    this.form.ArticleDetails[1].Title = form.value.articleTitle_en;

    if (!this.formErrors) {
      this.http.post(`${environment.fa_baseURL}Articles/Update`, this.form).subscribe((response) => {
        if (response['StatusId'] == 200) {
          this.toastr.success(`${response['message']}`);
        } else {
          this.toastr.error(`${response['message']}`);
        }
      })
    }
    else {
      console.log('error')
      this.formErrors = 'error'
    }

  }

}
