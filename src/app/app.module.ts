import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {MaterialModule}           from './material/material.module';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule,
  HTTP_INTERCEPTORS
}                                 from '@angular/common/http';

import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { AlertComponent }         from './_components/alert.component';
import { LoginComponent }         from './login/login.component';
import { HomeComponent }          from './home/home.component';
import { RegisterComponent }      from './register/register.component';
import { AppLayoutComponent }     from './_layout/app-layout/app-layout.component';
import { AdminLayoutComponent }   from './_layout/admin-layout/admin-layout.component';
import { ProductComponent }       from './product/product.component';
import { TokenInterceptor } from './_services/token.interceptor';
import { CreatePackageComponent } from './_package-area/create-package/create-package.component';
import { PackageIndexComponent } from './_package-area/package-index/package-index.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AppLayoutComponent,
    AdminLayoutComponent,
    ProductComponent,
    CreatePackageComponent,
    PackageIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
