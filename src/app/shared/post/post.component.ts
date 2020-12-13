import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { auth } from '../../../assets/firebase'
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  postList!: IPost;
  arrayWithData: any[] = [];
  items!: Observable<any[]>;


  constructor(private router: Router, firestore: AngularFirestore) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.items = firestore.collection('posts', ref => ref.orderBy('timestamp', 'desc')).valueChanges()
          this.items.pipe(take(1)).subscribe(s => {
            s.forEach(el => {
              this.arrayWithData.push(el);
            })
          })
        }
        else {
          if (this.router.url === '/profile') {
            this.items = firestore.collection('posts', ref => ref.where('email', '==', auth.currentUser?.email).orderBy("timestamp",'desc')).valueChanges()
            this.items.pipe(take(1)).subscribe(s => {
              s.forEach(el => {
                console.log("start: ", this.arrayWithData);
                this.arrayWithData.push(el);
                console.log("end: ", this.arrayWithData);
              })
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
    this.items.subscribe().unsubscribe();
    this.arrayWithData = []
  }
}
