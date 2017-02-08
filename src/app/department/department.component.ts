import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input('product') product: Product;
  constructor() { }

  ngOnInit() {
  }

}
