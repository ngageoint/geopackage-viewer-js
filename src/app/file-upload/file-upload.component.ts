import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpEventType } from '@angular/common/http';
import { GeopackageService } from '../geopackage.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {

  holder?: boolean;
  fileName?: any;

  constructor(private http: HttpClient, private geopackageservice: GeopackageService) {}

  onFileSelected(event: any) {
    this.holder = false

      const file:File = event.target.files[0];
      if (file) {
        const r = new FileReader()
        r.onload = () => {
          const array = new Uint8Array(r.result as ArrayBuffer);
          this.geopackageservice.setGeoPackageArray(array);
        }
        r.readAsArrayBuffer(file)
        this.fileName = file.name
        console.log(file)
        this.holder = true
      }
  }
}