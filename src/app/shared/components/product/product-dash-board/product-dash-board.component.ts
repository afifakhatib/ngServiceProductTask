import { Component, OnInit } from '@angular/core';
import { Iprod } from '../model/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';

@Component({
  selector: 'app-product-dash-board',
  templateUrl: './product-dash-board.component.html',
  styleUrls: ['./product-dash-board.component.scss']
})
export class ProductDashBoardComponent implements OnInit {

  productArr !: Array<Iprod> 

  constructor(
    private _prod : ProductsService,
    private _snackBar : SnackBarService,
  ) { }

  ngOnInit(): void {
    this.productArr = this._prod.fetchProdInfo()
    this._snackBar.openSnackBar(`Fetched All Product successfully!!`)
  }

}
