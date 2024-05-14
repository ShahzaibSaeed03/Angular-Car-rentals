import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { CarDatailsService } from '../../serives/car-datails.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-see-all-cars',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule, RouterLink],
  templateUrl: './see-all-cars.component.html',
  styleUrl: './see-all-cars.component.css'
})
export class SeeAllCarsComponent {
 
  carList: any []= [];


  carhttpservices= inject(CarDatailsService);
  ngOnInit(){
    this.getAllCars();
  }
     
   getAllCars(){
    this.carhttpservices.getCarDetails().subscribe((result:any)=>{
      console.log(result);
      if(result){
        this.carList = result;
      }
    })
   }
  
 }
