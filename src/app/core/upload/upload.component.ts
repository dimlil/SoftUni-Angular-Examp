import { Component, OnInit } from '@angular/core';
import { UploadPictureService } from 'src/app/services/upload-picture.service';
import { auth } from '../../../assets/firebase'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file!: File;

  constructor(private uploadPic:UploadPictureService) { }

  ngOnInit(): void {
  }
  importFile(event:any) {

    if (event.target.files.length == 0) {
       return
    }
      this.file = event.target.files[0];
    }

  uploadHandler(formData: { caption: string, tags: string, fileName: string }) {
    this.uploadPic.uploadHandler(this.file,formData.caption,formData.tags)
  }

}
