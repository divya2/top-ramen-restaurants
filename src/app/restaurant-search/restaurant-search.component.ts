import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss']
})
export class RestaurantSearchComponent implements OnInit {
  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchModel: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateSearchonModel(value) {
    this.searchModel = value;
    this.searchValueChanged.emit(this.searchModel);
  }

}
