import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentssrs',
  templateUrl: './contentssrs.component.html',
  styleUrls: ['./contentssrs.component.css']
})
export class ContentssrsComponent implements OnInit {
  @Input() contentssrs: any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
