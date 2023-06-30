import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-svg',
  templateUrl: './image-svg.component.html',
  styleUrls: ['./image-svg.component.scss']
})


export class ImageSvgComponent implements OnInit {
  @Input("tipo") typeSVG: string = "file"
  tipo: string = "file";
  ngOnInit(): void {
    
    if (this.typeSVG.search("excel") >-1) {
      this.tipo = "excel";
      return;
    }

    if (this.typeSVG.search("zip") > -1) {
      this.tipo = "zip";
      return;
    }
    if (this.typeSVG.search("doc") > -1) {
      this.tipo = "doc";
      return;
    }

    if (this.typeSVG.search("txt") > -1) {
      this.tipo = "txt";
      return;
    }

    if (this.typeSVG.search("image")> -1) {
      this.tipo = "media";
      return;
    }

    if (this.typeSVG.search("folder") >-1) {
      this.tipo = "folder";
      return;
    }
    this.tipo = "file";
  }




}
