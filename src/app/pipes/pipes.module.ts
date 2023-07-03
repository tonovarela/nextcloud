import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatSizePipe } from './format-size.pipe';




@NgModule({
  declarations: [    
    FormatSizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
      FormatSizePipe
    ]
})
export class PipesModule { }
