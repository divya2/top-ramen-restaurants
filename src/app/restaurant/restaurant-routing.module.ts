import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RestaurantTopListComponent } from './restaurant-top-list/restaurant-top-list.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantDetailsComponent
  },
  {
    path: 'top-list',
    component: RestaurantTopListComponent
  },
  {
    path: ':brand',
    component: RestaurantSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
