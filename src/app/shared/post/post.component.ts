import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { auth } from '../../../assets/firebase'
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoadPostsForHomeService } from 'src/app/services/load-posts-for-home.service';
import { LoadPostsForProfileService } from 'src/app/services/load-posts-for-profile.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  postList!: IPost;
  arrayWithData: any[] = [];
  items!: Observable<any[]>;


  constructor(private router: Router, firestore: AngularFirestore, private loadPost: LoadPostsForHomeService, private loadPostsForProfile:LoadPostsForProfileService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          loadPost.loadPost().subscribe(post => {
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
    console.log('destroy');
    // this.items.subscribe().unsubscribe();
    this.arrayWithData = []
  }
}
