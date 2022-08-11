import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeopackageService } from '../geopackage.service';


@Component({
  selector: 'app-onoffswitch',
  templateUrl: './onoffswitch.component.html',
  styleUrls: ['./onoffswitch.component.css']
})
export class OnoffswitchComponent implements OnInit {

  form: FormGroup;

  text: string | undefined;

  @Input() tableName: string = ""


  constructor(private fb: FormBuilder, @Inject(GeopackageService) private geopackageService: GeopackageService) {
    this.form = this.fb.group({
      enable: true,
      text: [
        {
          value: null,
          disabled: true,
        },
      ],
    });
    this.updateText();
}
  ngOnInit(): void {
  }


private updateText() {
  this.text = this.form.value.enable ? "Asterisk OK" : "Should not show the asterisk";
}

onChange(enable: boolean) {
  if (enable == true) {
    this.geopackageService.activateFeatureLayer(this.tableName)
    console.log("on change called")
  } else {
    this.geopackageService.deactivateFeatureLayer(this.tableName)
    console.log("on change deacivated")

  }
}



}


