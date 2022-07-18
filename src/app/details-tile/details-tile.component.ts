import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-tile',
  templateUrl: './details-tile.component.html',
  styleUrls: ['./details-tile.component.css']
})
export class DetailsTileComponent implements OnInit {
  @Input() tableInfo: any = {}
  @Input() geometryColumns: any = {}
  @Input() tableName: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
