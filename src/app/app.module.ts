import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule,
  HTTP_INTERCEPTORS
}                               from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { AlertComponent }       from './_components/alert.component';
import { LoginComponent }       from './login/login.component';
import { HomeComponent }        from './home/home.component';
import { RegisterComponent }    from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
