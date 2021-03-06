import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from '../assets/firebase'

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private rooter: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let result = false;

    if (auth.currentUser != null) {
      result = true
    }
    if (!result) {
      alert("Please Log In")
      this.rooter.navigate(['/login'])
    }
    return result;
  }

}
