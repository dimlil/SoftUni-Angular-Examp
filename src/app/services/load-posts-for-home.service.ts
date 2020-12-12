import { DoCheck, Injectable } from '@angular/core';
import { IPost } from "../interfaces/post"
import { db } from "../../assets/firebase"

@Injectable({
  providedIn: 'root'
})
export class LoadPostsForHomeService implements DoCheck {
  postList!: IPost;
  arrayOfData: any[] = [];

  constructor() {
  }
  cleanArrayOfData() {
    this.arrayOfData = [];
  }
  async getPost() {
    this.arrayOfData = [];
    db.collection("posts").orderBy('timestamp','desc').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("from server: ", doc.data());
        this.arrayOfData.push(doc.data())
      });
    })
  }
  ngDoCheck() {
  }
}
