import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [HeaderComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
