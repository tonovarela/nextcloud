import { Component, Input } from '@angular/core';
import { TypeSVG } from '../../interfaces/types';

@Component({
  selector: 'app-image-svg',
  templateUrl: './image-svg.component.html',
  styleUrls: ['./image-svg.component.scss']
})


export class ImageSvgComponent {

  @Input("tipo") typeSVG: string = "file"

}
