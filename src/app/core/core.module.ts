import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantDetailsService } from './services/restaurant-details.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule
  ],
  providers: [ RestaurantDetailsService ],
})
export class CoreModule { }
