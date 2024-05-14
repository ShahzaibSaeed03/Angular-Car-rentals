import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDatailsService } from '../../serives/car-datails.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-car-deatils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-deatils.component.html',
  styleUrl: './car-deatils.component.css'
})

export class CarDeatilsComponent implements OnInit {
  carData: any; 
  constructor(
    private route: ActivatedRoute,
    private carDetailsService: CarDatailsService
  ) {}

  ngOnInit(): void {
    let carId = this.route.snapshot.paramMap.get('id');
    console.warn(carId);
    if (carId) {
      this.carDetailsService.getCarById(carId).subscribe((result: any) => {
        console.log(result);
        this.carData=result;
      });
    }
  }
}
