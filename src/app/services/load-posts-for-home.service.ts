import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoadPostsForHomeService {

  constructor(private firestore: AngularFirestore) { }

  loadPost() {
    return this.firestore.collection('posts', ref => ref.orderBy('timestamp', 'desc')).valueChanges()
  }
}
