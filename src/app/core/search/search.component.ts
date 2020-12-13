import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  arrayWithData: any[] = [];
  show = false;
  howManyDocsHave!: any;
  docLength!: number;
  items!: Observable<any[]>;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void { }
  searchInDB(searching: string) {
    // this.howManyDocsHave = this.firestore.collection('posts', ref => ref.where('tags', '==', searching)).valueChanges()
    //   .subscribe((e) => {
    //     this.docLength = e.length
    //   })
    this.items = this.firestore.collection('posts', ref => ref.where('tags', '==', searching)).valueChanges()
    // this.items.pipe(take(this.docLength)).subscribe(s => {
    this.items.pipe(take(1)).subscribe(s => {
      s.forEach(el => {
        this.arrayWithData.push(el);
      })
    })
  }
  searchHandler(formData: { tags: string }) {
    this.show = true;
    this.searchInDB(formData.tags)
  }

}
