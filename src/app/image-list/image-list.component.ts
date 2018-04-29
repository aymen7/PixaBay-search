import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  template: `<h1>image list</h1>`,
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor(private _imageService: ImageService) {
  }

  ngOnInit() {
  }

}
