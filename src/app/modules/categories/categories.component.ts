import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  categoriesList: Array<CategoryElement> = [];
  displayedColumns: string[] = ['index', 'name', 'description', 'color', 'actions'];
  data = new MatTableDataSource<CategoryElement>();
  resultsLength: number;
  isLoadingResults: boolean;
  itemsPerPage: number = 10;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('addCategoryModal') addCategoryModal: TemplateRef<any>;

  categoryName: string

  catForm = {
    name: "",
    name_ar: "",
    image: "mdi_other.png",
    image_white: "",
    description: "",
    color: "",
    // color_dark: "",
    // _order: 0,
    // total_goal: 0,
    // total_kpi: 0,
    // no_users: 0,
    // percent_no_user: 0
  }

  params: HttpParams = new HttpParams()
    .set('timestamp', '123456')
    .set('public_key', 'akooonadmin')
    .set('token', '621de6a1edbbb596e030db92f5545008')


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.isLoadingResults = true;

    this.http.get
      (`${environment.baseURL}categories/`, { params: this.params })
      .subscribe(
        res => {
          console.log(res)
          if (res) {
            this.data = res['data']
            console.log(this.data)
            this.resultsLength = res['pagination'].record_count
            this.itemsPerPage = res['pagination'].count_per_page
          }
          this.isLoadingResults = false
        }
      )
  }

  // editCategoryDialog(categoryName: string , categoryId:number) {
  //   this.categoryName = categoryName;
  //   const dialogRef = this.dialog.open(this.confirmDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       this.deleteArticle(articleId)
  //     }
  //   })
  // }

  addCategoryDialog() {
    const dialogRef = this.dialog.open(this.addCategoryModal, { width: "50%" });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
      }
    })
  }

  addCategory(catForm: NgForm) {
    console.log(catForm.value)

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      params: this.params
    };

    let objects = new HttpParams({
      fromObject: catForm.value,
    });


    console.log(catForm.valid)
    this.http.post(`${environment.baseURL}categories/`, objects.toString(), httpOptions).subscribe(
      res => {
        console.log(res)
        this.getCategories()
      },
    )
    this.dialog.closeAll();
  }


  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }
}

export interface CategoryElement {
  category_id: number,
  name: string,
  image: string,
  image_white: string,
  description: string,
  color: string,
  color_dark: string,
  _order: number,
  total_goal: number,
  total_kpi: number,
  no_users: number,
  percent_no_user: number
}

