import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from "../../assets/firebase"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private username!: string;
  private email!: string;
  private password!: string;
  constructor(private route: Router) {

  }

  setUsername(username: string) {
    this.username = username;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }

  register() {
    auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((authUser) => {
        authUser.user?.updateProfile({
          displayName: this.username
        })
      })
      .then(() => {
        this.route.navigate(['/'])
      })
      .catch((err) => {
        this.route.navigate(["/register"])
        alert(err.message)
      });
  }

}
