import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 


  constructor(private http:HttpClient) { }

  getallproducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getallcategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getproductsbycategory(keyword :string ){
    return this.http.get('https://fakestoreapi.com/products/category/'+keyword)
  }

  getproductbyid(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
}


}
