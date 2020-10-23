import { Component, OnInit } from '@angular/core';
import { RestaurantDetailsService } from 'src/app/core/services/restaurant-details.service';
import { IRestaurants } from '../core/models/restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurants: Array<IRestaurants> = [];
  constructor(private restaurantService: RestaurantDetailsService) { }

  ngOnInit(): void {
    // this.restaurants = this.restaurantService.getRestaurants();
    this.restaurantService.getRestaurants().subscribe((data: Array<IRestaurants>) => {
      this.restaurants = data;
      console.log('restaurants', this.restaurants);
    });
  }

}
