import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessLoginAndRegisterGuard } from './access-login-and-register.guard';
import { AccessGuard } from './access.guard';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomeComponent } from './core/home/home.component';
import { ImageComponent } from './core/image/image.component';
import { LoginComponent } from './core/login/login.component';
import { ProfileComponent } from './core/profile/profile.component';
import { RegisterComponent } from './core/register/register.component';
import { SearchComponent } from './core/search/search.component';
import { UploadComponent } from './core/upload/upload.component';
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "login",
    canActivate:[AccessLoginAndRegisterGuard],
    component: LoginComponent
  },
  {
    path: "register",
    canActivate:[AccessLoginAndRegisterGuard],
    component: RegisterComponent
  },
  {
    path: "search",
    canActivate:[AccessGuard],
    component: SearchComponent
  },
  {
    path: "profile",
    canActivate:[AccessGuard],
    component: ProfileComponent
  },
  {
    path: "upload",
    canActivate:[AccessGuard],
    component: UploadComponent
  },
  {
    path: "image/:id",
    component: ImageComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
