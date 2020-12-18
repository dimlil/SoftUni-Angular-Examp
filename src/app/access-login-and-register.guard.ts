import { DoCheck, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from '../assets/firebase'
import { IsUserLoggedService } from './services/is-user-logged.service';

@Injectable({
  providedIn: 'root'
})
export class AccessLoginAndRegisterGuard implements CanActivate, DoCheck {
  constructor(private rooter: Router, private isUserLoaged: IsUserLoggedService) { }
  result = this.isUserLoaged.returnLocalStorage();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    if (this.result) {
      alert("You Are Logged!")
      this.rooter.navigateByUrl('/')
      return false
    }
    else {
      return true;
    }

  }
  ngDoCheck() {
    this.result = this.isUserLoaged.returnLocalStorage();
  }

}
