import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantTopListComponent } from './restaurant-top-list/restaurant-top-list.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDetailsComponent,
    RestaurantTopListComponent,
    RestaurantSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
