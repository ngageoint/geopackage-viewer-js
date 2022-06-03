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

  constructor(
    @Inject(GeopackageService) private geopackageService: GeopackageService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // when the table name changes, go get the feature dao from the geopackage service which is the object you can use to
    // access all of the things about a feature table and the rows
    // https://ngageoint.github.io/geopackage-js/classes/featuredao.html
    this.featureDao = this.geopackageService.getGeoPackageFeatureDao(this.tableName)
    this.count = this.featureDao?.getCount() ?? 0
  }

}
