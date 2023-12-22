import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public products: any[] = []
  public categories: any[] = []
  loading:boolean = false
  cartproducts:any[]=[]
  constructor(private service: ProductsService) {}
  

  ngOnInit(): void {
    this.getProducts()
    this.getcategories()
  }

  getProducts() {
    this.loading=true
    this.service.getallproducts().subscribe((res: any) => {
    console.log(res)
    this.products = res; 
    this.loading=false
    } ,error => {
      this.loading=false
      alert(error);
      
    }
    
    );
  }
  getcategories() {
    this.loading=true
    this.service.getallcategories().subscribe((res: any) => {
    console.log(res)
    this.categories = res; 
    this.loading=false
    },error => {
      this.loading=false
      alert(error);
      
    }
    );
  }
  filtercategory(event:any){
   let value = event.target.value
   if (value == "all"){
    this.getProducts()
   }else {
    this.getproductscategory(value)
   }
   
  }
  getproductscategory(keyword:string){
    this.loading=true

    this.service.getproductsbycategory(keyword).subscribe((res:any)=>{
    this.loading=false
    this.products = res
    
    })
  }


  addtocart(event:any){
    if ("cart" in localStorage){
    this.cartproducts= JSON.parse(localStorage.getItem("cart")!) 
    let exist =this.cartproducts.find(item => item.item.id == event.item.id)
    if (exist){
      alert("product is already in your cart")
    }else {

      this.cartproducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    }
  }else {
   this.cartproducts.push(event)
   localStorage.setItem("cart",JSON.stringify(this.cartproducts))

  }

  }
 
  
 
  
}

