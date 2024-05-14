import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HowItWorkComponent } from './components/how-it-work/how-it-work.component';
import { RentalDetalsComponent } from './components/rental-detals/rental-detals.component';
import { SeeAllCarsComponent } from './components/see-all-cars/see-all-cars.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import { CarDeatilsComponent } from './components/car-deatils/car-deatils.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'how-it-works', component: HowItWorkComponent },
  { path: 'rental-deals', component: SeeAllCarsComponent },
  { path: 'why-choose-us', component: WhyChooseUsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details/:id', component: CarDeatilsComponent },
  { path: '**', component: PageNotFoundComponent },
];
