import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input('product') product: Product;
  constructor() { }

  ngOnInit() {
  }

}
