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

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("thumbnail", file);

          const upload$ = this.http.post("/api/thumbnail-upload", formData);

          upload$.subscribe();
      }
  }
}