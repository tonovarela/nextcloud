import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  activatedRoute =inject(ActivatedRoute);
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {      
      console.log(id);
    });
  }

}
