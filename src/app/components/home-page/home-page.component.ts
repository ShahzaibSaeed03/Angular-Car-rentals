import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HowItWorkComponent } from '../how-it-work/how-it-work.component';
import { RentalDetalsComponent } from '../rental-detals/rental-detals.component';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,HowItWorkComponent,RentalDetalsComponent,WhyChooseUsComponent,FooterComponent,ReviewComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
