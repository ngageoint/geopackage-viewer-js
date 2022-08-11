import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-tile',
  templateUrl: './contents-tile.component.html',
  styleUrls: ['./contents-tile.component.css']
})
export class ContentsTileComponent implements OnInit {
  @Input() contents: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
