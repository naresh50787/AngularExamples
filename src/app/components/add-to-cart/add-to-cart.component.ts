import { Component, OnInit } from '@angular/core';

interface Product{
  sno : string;
  name : string;
  image : string;
  price : number;
  qty : number;
}

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public products: Product[] = [
    {
      sno: 'AA101',
      name : 'Apple Watch',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWW12?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1580325951651',
      price :30000,
      qty: 2
    },
    {
      sno: 'AA102',
      name : 'MI Watch',
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1645686208/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/248610_diblax.png/mxw_1440,f_auto',
      price :2000,
      qty: 1
    },
    {
      sno: 'AA103',
      name : 'Titan Watch',
      image: 'https://staticimg.titan.co.in/Titan/Catalog/90155AP02_1.jpg?pView=pdp',
      price :3000,
      qty: 1
    },
    {
      sno: 'AA104',
      name : 'RedMi Watch',
      image: 'https://m.media-amazon.com/images/I/61SNQW5vy8L._SL1500_.jpg',
      price :10000,
      qty: 1
    }
  ];

  public incrQty(productId : string):void{
    console.log(productId);
    this.products = this.products.map( (product: Product) => {
      if(product.sno === productId){
        return {
          ...product,
          qty :product.qty+1
        }
      }
      return product;
    })

  }

  public decQty(productId : string):void{
    console.log(productId);
    this.products = this.products.map( (product: Product) => {
      if(product.sno === productId){
        return {
          ...product,
          //qty : product.qty-1
          qty :product.qty-1 > 0 ? product.qty-1 : 1
        }
      }
      return product;
    })

  }

  public calTotal(){
    let total = 0;
    for(let product of this.products){
      total+=(product.qty * product.price);
    }
    return total;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
