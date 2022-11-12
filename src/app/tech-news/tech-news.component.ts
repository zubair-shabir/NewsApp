import { NewsApiServicesService } from './../service/news-api-services.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  techNewsDisplay: any = [];
  constructor(private _service: NewsApiServicesService) { }

  ngOnInit(): void {

    this._service.techNews().subscribe((result) => {
      console.log(result)
      this.techNewsDisplay = result.articles;
    })
  }

}
