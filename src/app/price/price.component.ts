import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input('price') price: number;
  constructor() { }

  ngOnInit() {
  }

}
