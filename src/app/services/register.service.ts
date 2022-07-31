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
  constructor(private route: Router, private isUserLogged: IsUserLoggedService) { }

  setUsername(username: string) {
    this.username = username;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }

  async register() {
    const registerUser = await auth.createUserWithEmailAndPassword(this.email, this.password);
    await registerUser.user?.updateProfile({
      displayName: this.username
    });
    this.isUserLogged.login(registerUser.user?.email!);
  }

}
