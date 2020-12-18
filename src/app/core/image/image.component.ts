import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  postImg!:string;

  constructor(private rooter: ActivatedRoute) { 
    this.rooter.params.subscribe(({ id }) => {
      this.postImg=id;
    })
  }

  ngOnInit(): void {
  }

}
