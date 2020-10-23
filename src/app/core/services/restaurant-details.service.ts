import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getRestaurants() {
    const apiUrl = 'http://starlord.hackerearth.com/TopRamen';
    return this.http.get(`${apiUrl}?per_page=10`);
  }
}
