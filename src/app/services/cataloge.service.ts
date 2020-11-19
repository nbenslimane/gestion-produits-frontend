import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogeService {
  public host:string="http://localhost:8080"
  constructor(private httpclient:HttpClient) { }

   public getProducts(page:number,size:number):Observable<any>{
    return this.httpclient.get(this.host+"/products?page="+page+"&size="+size); 
  }
  public getProductsByDesignation(mc:string, page:number,size:number):Observable<any>{
    return this.httpclient.get(this.host+"/products/search/byPrice?mc="+mc+"&page="+page+"&size="+size); 
  }

  public deleteProduct(url):Observable<any>{
    return this.httpclient.delete(url);
  }
  public saveProduct(url,data):Observable<any>{
     return this.httpclient.post(url,data);
  }
  public getProduct(url):Observable<Product>{
    return this.httpclient.get<Product>(url);
 }
  public updateProduct(url,data):Observable<any>{
  return this.httpclient.put(url,data);
}
}
