import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productSelected:boolean = false;
  selectProduct:string;

  constructor() { }

  ngOnInit() {
  }

  onSelectProduct(product){
    this.productSelected = true;
    this.selectProduct = product;
  }

}
