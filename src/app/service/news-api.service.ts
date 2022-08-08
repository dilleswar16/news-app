import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  categoryType: string ='';

  constructor(private http : HttpClient) { }


  everything = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=774398031546457fb8510b2075bffdd8`;
  topNews = `https://newsapi.org/v2/top-headlines?country=in&apiKey=774398031546457fb8510b2075bffdd8`;
  

  everyThingData() : Observable<any> {
    return this.http.get(this.everything);
  }

  topHeadlines() : Observable<any> {
    return this.http.get(this.topNews);
  }

  // businessNews() : Observable<any> {
  //   return this.http.get(this.business);
  // }

  testCategoryNews(categoryURL : string ) : Observable<any> {
    return this.http.get(categoryURL);
  }

}
