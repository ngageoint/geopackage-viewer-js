import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
