import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }
  loginHandler(formData: { email: string; password: string; }) {
    this.login.setEmail(formData.email);
    this.login.setPassword(formData.password);
    this.login.login();
  }

}
