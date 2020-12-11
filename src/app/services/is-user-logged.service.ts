import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedService {
  isLogged: any = false;
  constructor(private localStorage: LocalStorageService) {
    this.isLogged = localStorage.getItem('isLog')
  }
  getLocalStorage() {
    this.isLogged = localStorage.getItem('isLog')
  }
  login() {
    this.isLogged = true;
    this.localStorage.setItem('isLog', true)
  }
  logout() {
    this.isLogged = false;
    this.localStorage.setItem('isLog', false)
  }
}
