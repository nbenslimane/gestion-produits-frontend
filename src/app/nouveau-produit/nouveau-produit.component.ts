import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HttpClient } from '@angular/common/http';
import { CatalogeService } from '../services/cataloge.service';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {
  public currentProduct:Product;
  public mode:number=1;
  constructor(private catService:CatalogeService, private router:Router) { }

  ngOnInit() {
  }
  onSavaProduct(value:Product){
  this.catService.saveProduct(this.catService.host+"/products",value)
  .subscribe(res=>{
    console.log(res);
    //this.router.navigateByUrl("/products");
    this.currentProduct=res;
    this.mode=2;
   },err=>{
    console.log(err);
  })
  console.log(value);
  }
  onNewProduct(){
    this.mode=1;
  }
}
