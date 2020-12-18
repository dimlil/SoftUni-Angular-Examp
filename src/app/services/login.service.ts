import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from "../../assets/firebase"
import { IsUserLoggedService } from './is-user-logged.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private email!: string;
  private password!: string;
  constructor(private route: Router, private isUserLogged: IsUserLoggedService) { }

  setEmail(email: string) {
    this.email = email;

  }
  setPassword(password: string) {
    this.password = password;
  }

  login() {
    auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.isUserLogged.login();
      })
      .catch((err) => {
        this.route.navigate(["/register"])
        alert(err.message)
      });
  }
}
