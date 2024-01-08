import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppingComponent } from './show-shopping.component';

describe('ShowShoppingComponent', () => {
  let component: ShowShoppingComponent;
  let fixture: ComponentFixture<ShowShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowShoppingComponent]
    });
    fixture = TestBed.createComponent(ShowShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
