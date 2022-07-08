import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BoxComponent } from './components/box/box.component';
import { TodoComponent } from './components/todo/todo.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { ThemeComponent } from './components/theme/theme.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoxComponent,
    TodoComponent,
    DatabindingComponent,
    AddToCartComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    ThemeComponent,
    UserRegisterComponent,
    AuthUserComponent,
    ShoppingCartComponent,
    ProductComponent,
    PipesComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
