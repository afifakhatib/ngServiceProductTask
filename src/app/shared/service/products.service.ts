import { inject, Injectable } from '@angular/core';
import { Iprod, ProductsStatus } from '../components/product/model/product.interface';
import { UuidService } from './uuid.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

productData : Array<Iprod> = [
   {
    pname : 'Samsung Galaxy S23 pro',
    pdetails : 'Mobile 128gb 6gb AI Z-flip',
    pstatus : ProductsStatus.InProgress,
    pId : this._uuid.uuid(),
   },
   {
    pname : 'Iphone',
    pdetails : 'Mobile 128gb 6gb',
    pstatus : ProductsStatus.Dispatched,
    pId : this._uuid.uuid(),
   },
   {
    pname : 'OPPO A15s',
    pdetails : 'Mobile 64gb 4gb',
    pstatus : ProductsStatus.Delivered,
    pId : this._uuid.uuid(),
   }
  ]

  // private _productService = inject(ProductsService)

  constructor(
    private _uuid : UuidService,
    private _snackBar : SnackBarService
  ) { }

  fetchProdInfo(){
    return this.productData
  }

  createProdInfo(newProd : Iprod){
     this.productData.push(newProd)
     this._snackBar.openSnackBar(`New Product ${newProd.pname} is added successfully!!`)
  }

  updatedProdStatus(prodObj : Iprod){
     let getIndex = this.productData.findIndex(prod => prod.pId === prodObj.pId)
     this.productData[getIndex] = prodObj
     this._snackBar.openSnackBar(`product status is changed to ${prodObj.pstatus} successfully`)
  }
}
