import { Injectable, OnInit } from '@angular/core';
import { IPost } from "../interfaces/post"


@Injectable({
  providedIn: 'root'
})
export class LoadPostsForHomeService implements OnInit {
  postList!: IPost;
  arrayOfData: any[] = [];


  constructor() {
  }
  cleanArrayOfData() {
    this.arrayOfData = [];
  }
  getPost() {
    // db.collection("posts").orderBy('timestamp', 'desc').get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log("from server: ", doc.data());
    //     this.arrayOfData.push(doc.data())
    //   });
    // })
  }
  getProfilePost() {
    // console.log(auth.currentUser?.email);

    // db.collection("posts").where('email', '==', auth.currentUser?.email).get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log("from server: ", doc.data().imgUrl);
    //     if (this.arrayOfData.filter(function (e) { return e.imgUrl === doc.data().imgUrl; })) {
    //       console.log("YES BEEEE");
    //       console.log(this.arrayOfData.includes(doc.data()));
    //     }
    //     else {
    //       this.arrayOfData.push(doc.data())
    //     }
    //   });
    // })

    // db.collection('posts').where('email', '==', auth.currentUser?.email).onSnapshot(snapshot => {
    //   snapshot.forEach((doc)=>{
    //     this.arrayOfData.push(doc.data())
    //   })
    // })
    // console.log(this.arrayOfData);

    

  }
  ngOnInit() {

  }
}
