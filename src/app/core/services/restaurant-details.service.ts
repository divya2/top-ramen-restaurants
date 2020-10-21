import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {
  apiUrl = 'http://starlord.hackerearth.com/TopRamen';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getRestaurants() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }
}
