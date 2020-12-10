import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from "../../assets/firebase"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private email!: string;
  private password!: string;
  constructor(private route: Router) { }

  setEmail(email: string) {
    this.email = email;
    console.log(this.email);
    
  }
  setPassword(password: string) {
    this.password = password;
    
    console.log(this.password);
  }

  login() {
    auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.route.navigate(['/'])
      })
      .catch((err) => {
        this.route.navigate(["/register"])
        alert(err.message)
      });
  }
}
