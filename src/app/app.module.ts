import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MapComponent } from './map/map.component';
import { GeopackageGeneralInformationComponent } from './geopackage-general-information/geopackage-general-information.component';
import { GeopackageFeatureTableComponent } from './geopackage-feature-table/geopackage-feature-table.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    FileUploadComponent,
    MapComponent,
    GeopackageGeneralInformationComponent,
    GeopackageFeatureTableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
