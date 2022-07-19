import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tileinfo',
  templateUrl: './tileinfo.component.html',
  styleUrls: ['./tileinfo.component.css']
})
export class TileinfoComponent implements OnInit {
  @Input() tileInfo: any = {}


  constructor() { }

  ngOnInit(): void {
  }

}
