import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './modules/categories/categories.component';
import { GoalsComponent } from './modules/goals/goals.component';
import { HomeComponent } from './modules/home/home.component';
import { KpisComponent } from './modules/kpis/kpis.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { EditArticleComponent } from './modules/articles/edit-article/edit-article.component';
import { CreateArticleComponent } from './modules/articles/create-article/create-article.component';
import { LoginComponent } from './modules/account/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { LoggedInAuthGuard } from './services/auth.LoggedIn.guard';
import { FaLoginComponent } from './modules/fa-account/fa-login/fa-login.component';
import { TeacherRegisterComponent } from './modules/account/teacher-register/teacher-register.component';
import { TeachersComponent } from './modules/teachers/teachers.component';
import { ForgetPassComponent } from './modules/fa-account/forget-pass/forget-pass.component';

const routes: Routes = [
  { path: 'goals', component: GoalsComponent },
  { path: 'kpis', component: KpisComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent , canActivate:[AuthGuard] },
  { path: 'articles/edit/:articleId', component: EditArticleComponent },
  { path: 'articles/new', component: CreateArticleComponent },
  { path: 'login', component: LoginComponent , canActivate:[LoggedInAuthGuard] }, // Akooon Login
  { path: 'fa-login', component: FaLoginComponent }, // Fa login
  { path: 'teacher-register', component: TeacherRegisterComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'forget-pass', component: ForgetPassComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
