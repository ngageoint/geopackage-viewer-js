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
import { SrsComponent } from './srs/srs.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ContentsComponent } from './contents/contents.component';
import { ContentssrsComponent } from './contentssrs/contentssrs.component';
import { GeoColumnsComponent } from './geo-columns/geo-columns.component';
import { ColumnsComponent } from './columns/columns.component';
import { FeatureTabComponent } from './feature-tab/feature-tab.component';
import { OnoffswitchComponent } from './onoffswitch/onoffswitch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ZoomtoButtonComponent } from './zoomto-button/zoomto-button.component';
import {MatTableModule} from '@angular/material/table';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OnofftileComponent } from './onofftile/onofftile.component';
import { DetailsTileComponent } from './details-tile/details-tile.component';
import { ZoomtoTileComponent } from './zoomto-tile/zoomto-tile.component';
import { TileinfoComponent } from './tileinfo/tileinfo.component';
import { TilesrsComponent } from './tilesrs/tilesrs.component';
import { ContentsTileComponent } from './contents-tile/contents-tile.component';
import { ContentssrsTileComponent } from './contentssrs-tile/contentssrs-tile.component';
import { ColumnsTileComponent } from './columns-tile/columns-tile.component';









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
    SrsComponent,
    ContentsComponent,
    ContentssrsComponent,
    GeoColumnsComponent,
    ColumnsComponent,
    FeatureTabComponent,
    OnoffswitchComponent,
    ZoomtoButtonComponent,
    RadioButtonComponent,
    OnofftileComponent,
    DetailsTileComponent,
    ZoomtoTileComponent,
    TileinfoComponent,
    TilesrsComponent,
    ContentsTileComponent,
    ContentssrsTileComponent,
    ColumnsTileComponent,
    
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
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
