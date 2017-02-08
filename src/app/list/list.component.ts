import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('list') list: Product[]; 
  constructor() { }

  ngOnInit() {
  }

}
