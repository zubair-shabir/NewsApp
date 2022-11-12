import { NewsApiServicesService } from './../service/news-api-services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _services: NewsApiServicesService) { }

  topHeadingDisplay: any = [];

  ngOnInit(): void {

    this._services.topHeading().subscribe((result) => {
      console.log(result)
      this.topHeadingDisplay = result.articles;
    })
  }

}
