import { NgModule, makeEnvironmentProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {ProductsModule  } from "./products/products.module"

import { CommonModule } from '@angular/common';
import { CartsModule } from './carts/carts.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';









@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    HttpClientModule,
    UserModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
