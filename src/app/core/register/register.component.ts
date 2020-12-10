import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  registerHandler(formData: { username: string; email: string; password: string; rePassword: string }) {
    this.registerService.setUsername(formData.username);
    this.registerService.setEmail(formData.email);
    this.registerService.setPassword(formData.password)

    if (formData.password === formData.rePassword) {
      this.registerService.register();
    }
    else{
      alert("Error! Passwords don't match")
    }

  }
}
