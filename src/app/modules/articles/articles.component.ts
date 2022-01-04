import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements AfterViewInit {

  articlesList: Array<ArticleElement> = []
  articlesCount: number = 0;
  displayedColumns: string[] = ['Id', 'CatName', 'CreatedBy', 'ImageURL', 'Actions'];
  dataSource = new MatTableDataSource<ArticleElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('confirmDialog') confirmDialog: TemplateRef<any>;
  articleName: string
  constructor(private http: HttpClient, private dialog: MatDialog , private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.http.get
      (`${environment.fa_baseURL}Articles/GetAll`)
      .subscribe(res => {
        if (res['StatusId'] == 200) {
          this.articlesList = res['data']
          this.dataSource = res['data']
          this.articlesCount = res['TotalCount']
        }
      })
  }

  deleteArticle(id: number) {
    this.http.delete(`${environment.fa_baseURL}Articles/Delete/${id}/1`)
      .subscribe(res => {

        if (res['StatusId'] == 200) {
          this.toaster.success(res['message'])
          this.getArticles()
        }
      })
  }

  openDialog(articleName: string , articleId:number) {

    this.articleName = articleName;
    const dialogRef = this.dialog.open(this.confirmDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteArticle(articleId)
      }
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


export interface ArticleElement {
  AppLangId: number;
  ArticleDetails: [];
  CatName: string;
  Created: string;
  CreatedBy: string;
  Id: number;
  ImageURL: string;
  SouraId: number;
  Updated: string;
  UpdatedBy: string
}
