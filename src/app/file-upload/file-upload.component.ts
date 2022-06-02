import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
//import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MainPanelComponent } from '../main-panel/main-panel.component';
import { GeopackageService } from '../geopackage.service';

/*@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule,
   ],
  declarations: [  ],
  bootstrap:    [ AppComponent ]
})*/
// make sure to turn everything into cards

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {

  fileName = '';

  constructor(private http: HttpClient, private geopackageservice: GeopackageService) {}

  onFileSelected(event: any) {

      const file:File = event.target.files[0];
console.log("i am a file")
      if (file) {
        const r = new FileReader()
        r.onload = () => {
          const array = new Uint8Array(r.result as ArrayBuffer);
          console.log("file has been read") 
          this.geopackageservice.setGeoPackageArray(array);

        }
        r.readAsArrayBuffer(file)
          // if it is a GeoPackage file
          // if (f.name.lastIndexOf(‘gpkg’) === f.name.lastIndexOf(‘.’) + 1) {
          //   if (window.Piwik) {
          //     Piwik.getAsyncTracker().trackEvent(‘GeoPackage’, ‘load’, ‘File Size’, array.byteLength);
          //   }
          //   ga(‘send’, {
          //     hitType: ‘event’,
          //     eventCategory: ‘GeoPackage’,
          //     eventAction: ‘load’,
          //     eventLabel: ‘File Size’,
          //     eventValue: array.byteLength,
          //   });
          //   loadByteArray(array).then(function() {
          //     $(‘#choose-label’)
          //       .find(‘i’)
          //       .toggle();
          //     $(‘#download’).removeClass(‘gone’);
          //     $(‘#status’).addClass(‘gone’);
          //   });
        console.log(`the file is $file`)
          // this.fileName = file.name;

          // const formData = new FormData();

          // formData.append("thumbnail", file);

          // const upload$ = this.http.post("/api/thumbnail-upload", formData);

          // upload$.subscribe();
      }
  }
}