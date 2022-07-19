import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns-tile',
  templateUrl: './columns-tile.component.html',
  styleUrls: ['./columns-tile.component.css']
})
export class ColumnsTileComponent implements OnInit {
  @Input() columns: any = {}
  // @Input() tableName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
