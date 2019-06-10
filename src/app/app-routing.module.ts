import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './login';
import { RegisterComponent }    from './register';
import { HomeComponent }        from './home';
import { AuthGuard }            from './_guards';
import { AppLayoutComponent }   from './_layout';
import { ProductComponent }     from './product';
import { PackageIndexComponent,
  CreatePackageComponent}       from './_package-area';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app', component: AppLayoutComponent, canActivate: [AuthGuard],
    children:[
      { path:'product', component: ProductComponent},
      { path:'package', component: PackageIndexComponent},
      { path:'package-create', component: CreatePackageComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
