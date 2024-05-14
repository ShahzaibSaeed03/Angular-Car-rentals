import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDatailsService {

  constructor(private http: HttpClient) {}

  getCarDetails() {
    return this.http.get("http://localhost:3000/CarDetails");
  }

  getCarById(id: string) {
    return this.http.get(`http://localhost:3000/CarDetails/${id}`);
  }
}
