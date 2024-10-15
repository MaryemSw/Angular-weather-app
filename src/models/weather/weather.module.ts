export interface WeatherData {
  main: {
    temp: string;
    feels_like: string;
    pressure: string;
    humidity: string;
  };
  name: string;
  weather: Array<{
    main: string;
    icon: string;
  }>;
}
