import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather/weather.module';
import { Observable } from 'rxjs';
//const URL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // 

  constructor(private http: HttpClient) {}

  fetchData(city: string): Observable<WeatherData> { // Use WeatherData to type the response
    return this.http.get<WeatherData>(`${this.apiUrl}?q=${city}&appid=${environment.API_KEY}&units=metric`);
  }
}

