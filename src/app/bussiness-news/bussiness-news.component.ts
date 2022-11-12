import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-bussiness-news',
  templateUrl: './bussiness-news.component.html',
  styleUrls: ['./bussiness-news.component.css']
})
export class BussinessNewsComponent implements OnInit {
  businessNewsDisplay: any = [];
  constructor(private _service: NewsApiServicesService) { }

  ngOnInit(): void {

    this._service.BussinessNews().subscribe((result) => {
      console.log(result)
      this.businessNewsDisplay = result.articles;
    })
  }
}
