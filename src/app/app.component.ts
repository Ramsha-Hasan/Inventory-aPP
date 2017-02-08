import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product[];
  constructor(){
    
    this.product= [ 
      new Product('footware','sandals','http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=165760224',['fotware','sandals'],109),
      new Product('hats','BlackHat','http://image.dhgate.com/albu_860948766_00/1.0x0.jpg',['Hats','BlackHat'],109),
      new Product('winter','Jacket','https://a248.e.akamai.net/f/248/9086/10h/origin-d5.scene7.com/is/image/ColumbiaSportswear2/1557371_981_f?$COL_grid$',['winter','jackets'],109)
     ]
  }


}

export class Product{
  constructor(
    public sku: string,
    public name: string,
    public image: string,
    public department: string[],
    public price: number
  )
  {

  }
}
