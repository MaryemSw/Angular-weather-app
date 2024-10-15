import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../../models/weather/weather.module';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  providers : [WeatherService],
})
export class WeatherCardComponent implements OnInit {

  cityName ='Sfax';
  data = {
    temp: '',
    feelslike:'',
    pressure:'',
    humidity:'',
    city:'',
    main:'',
    imageURL:''


  }
  constructor(private readonly weatherService: WeatherService) {}
  ngOnInit(): void {
      this.loadData();
      
  }
  loadData() {
    if (this.cityName) {
        this.weatherService.fetchData(this.cityName).subscribe({
            next: (data) => {
                console.log('API Response:', data); // Log the entire API response
                
                this.data.temp = data.main.temp;
                this.data.feelslike = data.main.feels_like; // corrected to match API
                this.data.pressure = data.main.pressure;
                this.data.humidity = data.main.humidity;
                this.data.city = data.name;
                this.data.imageURL = data.weather[0].icon; // Make sure this is correct
                this.data.main = data.weather[0].main;

                // Log the image URL for debugging
                console.log('Image URL:', this.data.imageURL);
            },
            error: (err) => {
                console.log('Error while fetching data', err);
            }
        });
    }
}


}
