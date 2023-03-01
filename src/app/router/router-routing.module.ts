import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { CardDetailComponent } from '../pages/cardDetail/cardDetail.component';
import { ProductComponent } from '../pages/product/product.component';
import { LoginComponent } from '../pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card/:id', component: CardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
