import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { LoadPostsForHomeService } from 'src/app/services/load-posts-for-home.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postList!: IPost;
  arrayWithData: any[] = [];


  constructor(public postService: LoadPostsForHomeService) {
    this.arrayWithData = this.postService.arrayOfData;
    console.log("array with data: ", this.arrayWithData)
  }

  ngOnInit(): void {

  }

}
