import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  constructor(private api: NewsApiService) { }

  topHeadLinesData : any[] = [];

  ngOnInit(): void {
    this.api.topHeadlines()
    .subscribe(result => {this.topHeadLinesData = result.articles;
      console.log(this.topHeadLinesData)});
    ;
  }

  

}
