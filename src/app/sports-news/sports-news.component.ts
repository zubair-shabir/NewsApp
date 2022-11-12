import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  spotsNewsDisplay: any = [];
  constructor(private _service: NewsApiServicesService) { }

  ngOnInit(): void {

    this._service.sportsNews().subscribe((result) => {
      console.log(result)
      this.spotsNewsDisplay = result.articles;
    })
  }
}
