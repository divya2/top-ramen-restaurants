import { Component, NgZone, OnInit } from '@angular/core';
import { RestaurantDetailsService } from 'src/app/core/services/restaurant-details.service';
import { IRestaurants } from '../core/models/restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurants;
  constructor(private zone: NgZone, private restaurantService: RestaurantDetailsService) {
    this.restaurants = new Array<IRestaurants>();
   }

  ngOnInit(): void {
    this.getRestaurantDetails();
  }

  getRestaurantDetails(): void {
    this.restaurantService.getRestaurants()
        .subscribe(data => {
             this.zone.run(() => {
                 this.restaurants = data;
                 console.log(this.restaurants[0]);
             });
    });
}


}
