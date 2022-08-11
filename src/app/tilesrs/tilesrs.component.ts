import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tilesrs',
  templateUrl: './tilesrs.component.html',
  styleUrls: ['./tilesrs.component.css']
})
export class TilesrsComponent implements OnInit {
  @Input() srs: any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
