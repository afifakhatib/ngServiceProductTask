import { Component, Input, OnInit } from '@angular/core';
import { Iprod, ProductsStatus } from '../model/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() prodObj !: Iprod

  ProductsStatusEnum = ProductsStatus

  constructor(
    private _prod :ProductsService
  ) { }

  ngOnInit(): void {
  }

  onStatusUpdate(status : ProductsStatus){
    this.prodObj.pstatus = status;
    this._prod.updatedProdStatus(this.prodObj)
  }

  // onProgressUpdate(){
  //   this.prodObj.pstatus = ProductsStatus.InProgress;
  //   this._prod.updatedProdStatus(this.prodObj)
  // }
}
