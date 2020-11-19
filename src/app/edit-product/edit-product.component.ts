import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogeService } from '../services/cataloge.service';
import { Product } from '../model/product';
import { url } from 'inspector';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
public currentProduct:Product;
public url:string;
  constructor(private router:Router, private activateRoute:ActivatedRoute, private catservice: CatalogeService) { }

  ngOnInit() {
    this.url=atob(this.activateRoute.snapshot.params.id);
    this.catservice.getProduct(this.url)
    .subscribe(data=>{
     this.currentProduct=data;
    },err=>{
      console.log(err);
    })
  }
  onUpdateProduct(value:any){
  this.catservice.updateProduct(this.url,value)
  .subscribe(data=>{
    alert("Success");
    console.log(data);
    this.router.navigateByUrl("/products");
  },err=>{
   console.log(err);
  })
  }
}
