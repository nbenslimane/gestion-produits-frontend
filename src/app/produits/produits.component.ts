import { Component, OnInit } from '@angular/core';
import { CatalogeService } from '../services/cataloge.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products:any;
  public size:number=6;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentKeyword:string;
  constructor(private catservice:CatalogeService, private router:Router) { }

  ngOnInit() {
  }

  onGetProduct(){
    this.catservice.getProducts(this.currentPage,this.size)
    .subscribe(data=>{
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.products=data;
    }, err=>{
      console.log(err);
    })
  }
  onPageProduct(i){
   this.currentPage=i;
   this.ChercherProduits()
  }

  onChercher(form:any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.ChercherProduits();
  }

  ChercherProduits(){
    this.catservice.getProductsByDesignation(this.currentKeyword,this.currentPage,this.size)
    .subscribe(data=>{
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.products=data;
    }, err=>{
      console.log(err);
    }) 
   }
   onDelete(p){
     let conf=confirm("etes vous sur de supprimer le produit");
     if(conf){
       this.catservice.deleteProduct(p._links.self.href)
        .subscribe(
          data=>{
           this.ChercherProduits();
          },err=>{
              console.log(err);
          }
        )
     }
     console.log(p);
     console.log(p._links.self.href)
   }

   onEdit(p){
     let url=p._links.self.href;
     this.router.navigateByUrl("/edit-product/"+btoa(url));
   }
}
