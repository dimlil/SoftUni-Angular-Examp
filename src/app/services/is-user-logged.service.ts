import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { auth } from "../../assets/firebase"

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedService {
  isLogged = false;
  localStoregeIsLog: any;
  constructor(private localStorage: LocalStorageService, private route: Router) {
    this.localStoregeIsLog = localStorage.getItem('isLog')
    this.getLocalStorage();
  }
  getLocalStorage() {
    if (this.localStoregeIsLog === false) {
      this.isLogged = false;
    }
    else {
      if (this.localStoregeIsLog === true) {
        this.isLogged = true;
      }
    }
  }
  returnLocalStorage(){
    if (this.localStoregeIsLog === false) {
      return false;
    }
    else {
      if (this.localStoregeIsLog === true) {
        return true;
      }
    }
    return
  }
  login(email:string) {
    this.isLogged = true;
    this.localStorage.setItem('isLog', true)
    this.localStorage.setItem('email', email)
    this.route.navigateByUrl('/')
  }
  logout() {
    this.isLogged = false;
    this.localStorage.setItem('isLog', false)
  }
}
