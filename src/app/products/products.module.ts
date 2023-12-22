import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { SharedService } from '../shared/services/shared.service';
import { CartComponent } from '../carts/components/cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
    
    
  

    
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
 
    
    
    
    
    
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule { }
