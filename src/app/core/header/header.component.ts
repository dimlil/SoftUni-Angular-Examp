import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showHide=true;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) { //after nagivating chechs url and show or hide component
        if (this.router.url==='/login'||this.router.url==='/register') {
          this.showHide=false;
        }
        else{
          this.showHide=true;
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
