import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MapComponent } from './map-component/map-component.component';
import { GeopackageGeneralInformationComponent } from './geopackage-general-information/geopackage-general-information.component';
import { GeopackageFeatureTableComponent } from './geopackage-feature-table/geopackage-feature-table.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeopackageTileTableComponent } from './geopackage-tile-table/geopackage-tile-table.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DetailsButtonComponent } from './details-button/details-button.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    FileUploadComponent,
    MapComponent,
    GeopackageGeneralInformationComponent,
    GeopackageFeatureTableComponent,
    GeopackageTileTableComponent,
    DetailsButtonComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    LeafletModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
