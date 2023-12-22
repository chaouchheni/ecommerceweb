import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() data:any={}
  @Output() item = new EventEmitter()
  addButton:boolean=false
  amount:number=0
  constructor(private router: Router) { }
  
  
  ngOnInit(): void {
    
  }
  add(){
  this.item.emit({item:this.data,quantity:this.amount})
  }
  navigateToDetails(productId: string) {
    this.router.navigate(['/details', productId]);
  }

}
