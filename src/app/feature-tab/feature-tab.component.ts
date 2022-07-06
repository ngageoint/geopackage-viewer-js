import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-tab',
  templateUrl: './feature-tab.component.html',
  styleUrls: ['./feature-tab.component.css']
})
export class FeatureTabComponent implements OnInit {
  @Input() tab: any = {}

  
  constructor() { }

  ngOnInit(): void {
  }

}
