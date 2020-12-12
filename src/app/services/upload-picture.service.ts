import { Injectable } from '@angular/core';
import { db, storage, auth } from '../../assets/firebase'
import firebase from 'firebase'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private route: Router) {
  }

  uploadHandler(file: File, caption: string, tags: string) {


    storage.ref(`images/${file.name}`).put(file).on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progressing = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        // setProgress(progressing)
      },
      (err) => {
        console.log(err);
        alert(err.message)
      },
      () => {
        //when that complite that will execute
        storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),//upload img in top of db and home page
              caption: caption,
              tags: tags,
              imgUrl: url,
              username: auth.currentUser?.displayName,
              email: auth.currentUser?.email
            })
          })
          .then(() => {
            this.route.navigateByUrl('/')
          })
      }
    )
  }
}
