import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.css']
})


export class DetailsButtonComponent implements OnInit {
  @Input() tableInfo: any = {}
  @Input() geometryColumns: any = {}
  @Input() tableName: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
