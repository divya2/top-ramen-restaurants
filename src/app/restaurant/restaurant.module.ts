import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RestaurantTopListComponent } from './restaurant-top-list/restaurant-top-list.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RestaurantSearchComponent,
    RestaurantTopListComponent,
    RestaurantSearchComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    HttpClientModule
  ]
})
export class RestaurantModule { }
