import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { IsUserLoggedService } from 'src/app/services/is-user-logged.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLogged = false;
  showHide = true;
  constructor(private router: Router, public isUserLogged: IsUserLoggedService) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) { //after nagivating chechs url and show or hide component
        if (this.router.url === '/' || this.router.url === '/search' || this.router.url === '/profile') {
          this.showHide = true;
        }
        else {
          this.showHide = false;
        }
      }
    })
  }

  signOutHaindler() {
    this.isUserLogged.logout();
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.isLogged = this.isUserLogged.isLogged;
  }

}
