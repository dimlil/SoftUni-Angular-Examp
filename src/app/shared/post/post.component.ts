import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { LoadPostsForHomeService } from 'src/app/services/load-posts-for-home.service';
import { LoadPostsForProfileService } from 'src/app/services/load-posts-for-profile.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  arrayWithData: any[] = [];


  constructor(private router: Router, private loadPost: LoadPostsForHomeService, private loadPostsForProfile: LoadPostsForProfileService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.loadPost.loadPost().subscribe(post => {
            this.arrayWithData = post
          })
        }
        else {
          if (this.router.url === '/profile') {
            this.loadPostsForProfile.loadPost().subscribe(post => {
              this.arrayWithData = post
            })
          }
        }
      }
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.arrayWithData = []
  }
}
