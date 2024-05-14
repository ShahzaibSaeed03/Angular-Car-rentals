import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDeatilsComponent } from './car-deatils.component';

describe('CarDeatilsComponent', () => {
  let component: CarDeatilsComponent;
  let fixture: ComponentFixture<CarDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
