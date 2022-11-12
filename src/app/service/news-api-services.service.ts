import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServicesService {

  constructor(private _http: HttpClient) { }


  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=90302ed5c6484f39894041e5d3c71df8';

  techApi = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=90302ed5c6484f39894041e5d3c71df8'
  bussinessApi = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=90302ed5c6484f39894041e5d3c71df8'
  sportsApi = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=90302ed5c6484f39894041e5d3c71df8'

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl)
  }


  techNews(): Observable<any> {
    return this._http.get(this.techApi)
  }
  BussinessNews(): Observable<any> {
    return this._http.get(this.bussinessApi)
  }
  sportsNews(): Observable<any> {
    return this._http.get(this.sportsApi)
  }



}
