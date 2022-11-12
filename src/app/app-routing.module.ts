import { SportsNewsComponent } from './sports-news/sports-news.component';
import { BussinessNewsComponent } from './bussiness-news/bussiness-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TopHeadingComponent },
  { path: 'tech', component: TechNewsComponent },
  { path: 'Bussiness', component: BussinessNewsComponent },
  { path: 'sports', component: SportsNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
