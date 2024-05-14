import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllCarsComponent } from './see-all-cars.component';

describe('SeeAllCarsComponent', () => {
  let component: SeeAllCarsComponent;
  let fixture: ComponentFixture<SeeAllCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeAllCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeAllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
