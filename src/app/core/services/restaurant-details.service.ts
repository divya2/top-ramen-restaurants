import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { IRestaurants } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {
  result;
  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getRestaurants() {
    const apiUrl = 'http://starlord.hackerearth.com/TopRamen';
    return this.http.get(`${apiUrl}?per_page=10`).toPromise().then(
      result => this.result = result,
      error => console.log(error));
  }

  setData(data) {
    this.apiData.next(data);
  }
}
