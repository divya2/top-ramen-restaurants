import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { RestaurantTopListComponent } from './restaurant-top-list/restaurant-top-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { FormsModule } from '@angular/forms';
import { ListFilterPipe } from './restaurant-search/list-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantDetailsComponent,
    RestaurantTopListComponent,
    RestaurantSearchComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
