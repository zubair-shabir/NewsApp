import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsApiServicesService } from './service/news-api-services.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BussinessNewsComponent } from './bussiness-news/bussiness-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component'

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechNewsComponent,
    BussinessNewsComponent,
    SportsNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
