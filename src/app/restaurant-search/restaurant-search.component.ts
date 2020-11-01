import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss']
})
export class RestaurantSearchComponent implements OnInit {
  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter<string>();
  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }


changedSearchText(): void {
  // emit the change so the parent component can see it
  this.searchValueChanged.emit(this.searchText);
}

}
