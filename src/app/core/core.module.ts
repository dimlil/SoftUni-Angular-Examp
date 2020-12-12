import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"
import { SharedModule } from '../shared/shared.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, LoginComponent, RegisterComponent, LogoComponent, ErrorPageComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
