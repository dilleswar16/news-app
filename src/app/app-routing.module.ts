import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryNewsComponent } from './components/category-news/category-news.component';
import { TopNewsComponent } from './components/top-news/top-news.component';

const routes: Routes = [
  { path : "", component: TopNewsComponent},
  { path : "category/:categoryType", component: CategoryNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
