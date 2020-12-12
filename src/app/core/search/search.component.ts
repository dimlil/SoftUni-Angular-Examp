import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { auth } from '../../../assets/firebase'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  arrayWithData: any[] = [];
  show = false;
  items!: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    
  }

  ngOnInit(): void {
 
  }
  searchInDB(searchng:string){
    this.items = this.firestore.collection('posts', ref => ref.where('tags', '==', searchng)).valueChanges()
    this.items.subscribe(s => {
      s.forEach(el => {
        this.arrayWithData.push(el);
      })
    })
  }
  searchHandler(formData: { tags: string}) {
    this.show=true;
    this.searchInDB(formData.tags)
  }

}
