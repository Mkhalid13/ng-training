import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CategoriesComponent } from './modules/categories/categories.component';
import { GoalsComponent } from './modules/goals/goals.component';
import { KpisComponent } from './modules/kpis/kpis.component';
import { HomeComponent } from './modules/home/home.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { EditArticleComponent } from './modules/articles/edit-article/edit-article.component';
import { CreateArticleComponent } from './modules/articles/create-article/create-article.component';
import { AccountComponent } from './modules/account/account.component';
import { LoginComponent } from './modules/account/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { LoggedInAuthGuard } from './services/auth.LoggedIn.guard';
import { FaAccountComponent } from './modules/fa-account/fa-account.component';
import { FaLoginComponent } from './modules/fa-account/fa-login/fa-login.component';
import { TeacherRegisterComponent } from './modules/account/teacher-register/teacher-register.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GoalsComponent,
    KpisComponent,
    HomeComponent,
    ArticlesComponent,
    EditArticleComponent,
    CreateArticleComponent,
    AccountComponent,
    LoginComponent,
    FaAccountComponent,
    FaLoginComponent,
    TeacherRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers:[AuthGuard , LoggedInAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
