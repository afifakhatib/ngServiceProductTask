import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/shared/service/products.service';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { ProductsStatus } from '../model/product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('prodForm') prodForm !: NgForm;

  constructor(
    private _prod : ProductsService,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  onProdAdd(){
    if(this.prodForm.valid){
      let newProd = {...this.prodForm.value,
        pId : this._uuid.uuid(),
        pstatus : ProductsStatus.InProgress
      }
      // console.log(newProd);
      this.prodForm.resetForm()
      this._prod.createProdInfo(newProd)
    }
  }

}
