import { Injectable } from '@angular/core';
import { IPost } from "../interfaces/post"
import { db } from "../../assets/firebase"

@Injectable({
  providedIn: 'root'
})
export class LoadPostsForHomeService {
  postList!: IPost;
  arrayOfData: any[] = [];

  constructor() {
    db.collection("posts").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.arrayOfData.push(doc.data())
      });
    })
  }
}
