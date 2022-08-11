import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-columns',
  templateUrl: './geo-columns.component.html',
  styleUrls: ['./geo-columns.component.css']
})
export class GeoColumnsComponent implements OnInit {
  @Input() geometryColumns: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
