import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarDatailsService } from '../../serives/car-datails.service';

@Component({
  selector: 'app-rental-detals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rental-detals.component.html',
  styleUrl: './rental-detals.component.css'
})
export class RentalDetalsComponent {

  carList: any []= [];

  
  carhttpservice= inject(CarDatailsService);
  ngOnInit(){
    this.getAllCars();
  }
     
   getAllCars(){
    this.carhttpservice.getCarDetails().subscribe((result:any)=>{
      console.log(result);
      if(result){
        this.carList = result;
      }
    })
   }

}
