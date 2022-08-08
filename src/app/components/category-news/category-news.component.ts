import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent implements OnInit {

  categoryType : any = "";
  business = `https://newsapi.org/v2/top-headlines?country=in&${this.categoryType}=business&apiKey=774398031546457fb8510b2075bffdd8`;

  

  constructor(private api: NewsApiService,private route : ActivatedRoute) { }

  catHeadlinesData : any[] = [];

  

  ngOnInit(): void {
    // this.api.businessNews().subscribe((data)=>{
    //   this.catHeadlinesData = data.articles;
    // });

    this.route.paramMap.subscribe((params : ParamMap) => {
      this.categoryType = params.get('categoryType');
    });

    console.log(this.categoryType);
    this.business = `https://newsapi.org/v2/top-headlines?country=in&category=${this.categoryType}&apiKey=774398031546457fb8510b2075bffdd8`;

    console.log(this.business);
    
    
    this.api.testCategoryNews(this.business).subscribe((data) => {
      this.catHeadlinesData = data.articles;
    });

  }

  
}
