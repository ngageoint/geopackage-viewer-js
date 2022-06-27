import { Component, Inject, OnInit } from '@angular/core';
import { GeopackageService } from '../geopackage.service';


@Component({
  selector: 'app-geopackage-general-information',
  templateUrl: './geopackage-general-information.component.html',
  styleUrls: ['./geopackage-general-information.component.css']
})
export class GeopackageGeneralInformationComponent implements OnInit {

  
  name: string = ""
  tables: { features: string[]; tiles: string[]; attributes: string[]; } = {features: [], tiles: [], attributes: []}

  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService) {}

  ngOnInit(): void {
    this.geopackageService.geopackageOpened$.subscribe(event => {
      console.log(`Geopackage was opened`, event)
      this.name = event.geopackage.name
      this.tables = event.geopackage.getTables()
    })
  }
  showDetails = false;
  toggleDetails() {
    if (this.showDetails == false) {
      this.showDetails = true;
    } else if (this.showDetails == true) {
      this.showDetails = false;
    }
    
  }


}
