import { Component, NgZone, OnInit } from '@angular/core';
import { IRestaurants } from '../core/models/restaurant.model';
import { RestaurantDetailsService } from '../core/services/restaurant-details.service';

@Component({
  selector: 'app-restaurant-top-list',
  templateUrl: './restaurant-top-list.component.html',
  styleUrls: ['./restaurant-top-list.component.scss']
})
export class RestaurantTopListComponent implements OnInit {
  arr;
  restaurants;
  sorted;

  constructor(private restaurantDetailsService: RestaurantDetailsService, private zone: NgZone) {
    this.restaurantDetailsService.apiData$.subscribe(data => {
      data !== null ?  this.arr = data : this.getRestaurantDetails();
      console.log('df', this.arr);
    });
  }

  ngOnInit(): void {
    console.log('dfdd', this.arr);
    if (this.arr !== undefined) {
      this.sortByYear();
    }
  }

  sortByYear(): void {
    this.sorted = this.arr.filter((top) => {
      const prop = top['Top Ten'].split(' ');
      const sorted = prop.sort();
      return (sorted[0] === '#1') ? prop.splice(1, 4).join('') : '';
    });
    console.log('sort', this.sorted);
  }

  getRestaurantDetails(): void {
    console.log('hiii');
    this.restaurantDetailsService.getRestaurants().then(res => {
      this.arr = res;
      this.restaurantDetailsService.setData(res);
      this.sortByYear();
    });
  }

}
