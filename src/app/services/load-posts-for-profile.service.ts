import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from '../../assets/firebase'

@Injectable({
  providedIn: 'root'
})
export class LoadPostsForProfileService {

  constructor(private firestore: AngularFirestore) { }

  loadPost() {
    // return this.firestore.collection('posts', ref => ref.orderBy('timestamp', 'desc')).valueChanges()
    return this.firestore.collection('posts', ref => ref.where('email', '==', auth.currentUser?.email).orderBy("timestamp", 'desc')).valueChanges()
  }
}
