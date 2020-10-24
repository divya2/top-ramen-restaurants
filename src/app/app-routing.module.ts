import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RestaurantTopListComponent } from './restaurant-top-list/restaurant-top-list.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'restaurants',
  component: RestaurantDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
