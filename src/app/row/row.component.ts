import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input('product') product: Product;
  constructor() { }

  ngOnInit() {
  }

}
