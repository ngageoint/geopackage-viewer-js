import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FeatureDao } from '@ngageoint/geopackage/dist/lib/features/user/featureDao';
import { FeatureRow } from '@ngageoint/geopackage/dist/lib/features/user/featureRow';
import { GeopackageService } from '../geopackage.service';

@Component({
  selector: 'app-geopackage-feature-table',
  templateUrl: './geopackage-feature-table.component.html',
  styleUrls: ['./geopackage-feature-table.component.css']
})
export class GeopackageFeatureTableComponent implements OnInit, OnChanges {

  @Input() tableName: string = ""
  @Input() featureDao: FeatureDao<FeatureRow> | undefined

  count: number = 0
  showDetails = null;
  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.featureDao = this.geopackageService.getGeoPackageFeatureDao(this.tableName)
    this.count = this.featureDao?.getCount() ?? 0
    this.geopackageService.activateFeatureLayer(this.tableName)
  }

}
