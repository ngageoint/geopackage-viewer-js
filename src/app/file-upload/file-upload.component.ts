import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HttpEventType } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
//import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MainPanelComponent } from '../main-panel/main-panel.component';
import { GeopackageService } from '../geopackage.service';
import { finalize, Subscription } from 'rxjs';


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