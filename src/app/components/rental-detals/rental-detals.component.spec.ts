import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetalsComponent } from './rental-detals.component';

describe('RentalDetalsComponent', () => {
  let component: RentalDetalsComponent;
  let fixture: ComponentFixture<RentalDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalDetalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
