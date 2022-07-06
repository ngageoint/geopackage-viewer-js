import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-srs',
  templateUrl: './srs.component.html',
  styleUrls: ['./srs.component.css']
})
export class SrsComponent implements OnInit {
  @Input() srs: any = {}
  
  constructor() { }

  ngOnInit(): void {
  }

}
