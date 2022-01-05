import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  isLoadingResults: boolean;
  data: [];
  resultsLength: number;
  pageSize: number = 10;
  offset: number = 1
  displayedColumns: string[] = ['Name', 'Email', 'Country', 'Gender', 'Age', 'Status', 'actions'];
  pageEvent: any;

  constructor(private http: HttpClient, public toaster: ToastrService) { }

  ngOnInit(): void {
    this.getTeachers(this.pageEvent);
  }

  getTeachers(pageEvent: { pageIndex: number; pageSize: number }) {
    this.isLoadingResults = true;
    let offset: number, pageSize: number;
    if (pageEvent) {
      offset = (pageEvent.pageIndex * pageEvent.pageSize) + 1
      pageSize = pageEvent.pageSize
    } else {
      offset = this.offset
      pageSize = this.pageSize
    }

    this.http.get
      (`${environment.fa_baseURL}Teachers/GetPaged/${offset}/${pageSize}/`)
      .subscribe(
        res => {
          console.log(res)
          if (res) {
            this.data = res['data']
            this.resultsLength = res['TotalCount']
          }
          this.isLoadingResults = false
        }
      )
  }

  changeTeacherStatus(id: number, approval: boolean) {
    let token = 'ZMSl8g0tBLGUgFnvsLfA-ViaiutJmKfaDuchNaoVkbiEMYT7MJdTEOSE3mFBAZrEb4ANP7VbBe-MazeszexI3-y8OgrRxBbO1_ewTM-h2NaDKRKTvm_oClBUVXjtfAX2-koM1SJJiTzXLXLu0ZaldSPNE6dRIJV4fjOorHgvh4ITMvGjfxMYC3prSwYgXMYlDFhbv_TG4Gtz6pl3G-mKBPC3hwUQArJ_KbuiQf2OFGE';
    let headers = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }),
    };


    this.http.post(`${environment.fa_baseURL}Teachers/ApproveTeacher/${id}/${!approval}`, null, headers).subscribe(
      res => {
        console.log(res)
        this.toaster.success(res['message'])
        this.getTeachers(this.pageEvent)
      }
    )

  }

}
