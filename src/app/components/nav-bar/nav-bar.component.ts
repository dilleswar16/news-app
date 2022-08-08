import { Location } from '@angular/common';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  

  constructor(public _location: Location,private router : Router) {

    
  }

  ngOnInit(): void {
    
  }

  

  action (cat : string) {
      this.router.navigateByUrl(`/category/${cat}`).then(()=>{
        window.location.reload();
      })
  }




  

}
