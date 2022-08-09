import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  fileName: string | undefined;
  http: any;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: { target: { files: File[]; }; }) {

    const file:File = event.target.files[0];

    if (file) {
      console.log("hi")
        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
}
display = false;
 onPress() {
   this.display = true;
 }



}
