import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {CreateProductComponent} from './admin/create-product/create-product.component';
import {CartComponent} from './cart/cart.component';
import {FilterPipe} from './filter.pipe';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    CreateProductComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
