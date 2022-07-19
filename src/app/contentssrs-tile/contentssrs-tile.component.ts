import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentssrs-tile',
  templateUrl: './contentssrs-tile.component.html',
  styleUrls: ['./contentssrs-tile.component.css']
})
export class ContentssrsTileComponent implements OnInit {
  @Input() contentssrs: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
