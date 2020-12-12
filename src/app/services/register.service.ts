import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from "../../assets/firebase"
import { IsUserLoggedService } from './is-user-logged.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private username!: string;
  private email!: string;
  private password!: string;
  constructor(private route: Router, private isUserLogged: IsUserLoggedService) {}

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
        this.isUserLogged.login();
      })
      .catch((err) => {
        this.route.navigate(["/register"])
        alert(err.message)
      });
  }

}
