import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTopListComponent } from './restaurant-top-list.component';

describe('RestaurantTopListComponent', () => {
  let component: RestaurantTopListComponent;
  let fixture: ComponentFixture<RestaurantTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
