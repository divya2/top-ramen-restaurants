import { Component, OnInit } from '@angular/core';
import { RestaurantDetailsService } from 'src/app/core/services/restaurant-details.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurants;
  constructor(private restaurantService: RestaurantDetailsService) { }

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }

}
