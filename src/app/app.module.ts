import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';

import { ContainerComponent } from './component/container/container/container.component';
import { AppRoutingModule } from './router/router-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from "@angular/common/http"
import { CardDetailComponent } from './pages/cardDetail/cardDetail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    DashboardComponent,
    HomeComponent,
    CardDetailComponent,
    SidebarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
