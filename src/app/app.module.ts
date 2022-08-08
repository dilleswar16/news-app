import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewsApiService } from './service/news-api.service';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { CategoryNewsComponent } from './components/category-news/category-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    NavBarComponent,
    NewsItemComponent,
    CategoryNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
