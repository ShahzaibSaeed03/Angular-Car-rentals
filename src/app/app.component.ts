import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { RentalDetalsComponent } from './components/rental-detals/rental-detals.component';
import { HowItWorkComponent } from "./components/how-it-work/how-it-work.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent,FooterComponent]
})
export class AppComponent {
  title = 'Car-rentals';
}
