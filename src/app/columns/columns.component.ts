import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {
  @Input() columns: any = {}
  @Input() tableName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
