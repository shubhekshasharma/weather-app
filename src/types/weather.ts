/**
 * Weather data types
 *
 * These interfaces define the structure of weather data
 * used throughout the application
 */

export interface WeatherCondition {
  code: number;
  description: string;
}

export interface CurrentWeather {
  temperature: number; // in Fahrenheit
  feelsLike: number; // in Fahrenheit
  humidity: number; // percentage
  windSpeed: number; // in mph
  condition: WeatherCondition;
}

export interface DailyForecast {
  date: string; // ISO date string
  maxTemp: number; // in Fahrenheit
  minTemp: number; // in Fahrenheit
  condition: WeatherCondition;
}

export interface WeatherData {
  city: string;
  latitude: number;
  longitude: number;
  current: CurrentWeather;
  forecast: DailyForecast[];
}

/**
 * WMO Weather interpretation codes
 * Reference: https://open-meteo.com/en/docs
 */
export const WEATHER_CODES: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

export function getWeatherDescription(code: number): string {
  return WEATHER_CODES[code] || "Unknown";
}
// {
//   "latitude": 35.981766,
//   "longitude": -78.8941,
//   "generationtime_ms": 0.444173812866211,
//   "utc_offset_seconds": 0,
//   "timezone": "GMT",
//   "timezone_abbreviation": "GMT",
//   "elevation": 124,
//   "current_units": {
//     "time": "iso8601",
//     "interval": "seconds",
//     "temperature_2m": "°F",
//     "relative_humidity_2m": "%",
//     "apparent_temperature": "°F",
//     "wind_speed_10m": "km/h",
//     "weather_code": "wmo code"
//   },
//   "current": {
//     "time": "2025-11-10T03:30",
//     "interval": 900,
//     "temperature_2m": 60.4,
//     "relative_humidity_2m": 70,
//     "apparent_temperature": 58.5,
//     "wind_speed_10m": 8.2,
//     "weather_code": 3
//   },
//   "daily_units": {
//     "time": "iso8601",
//     "weather_code": "wmo code",
//     "temperature_2m_max": "°F",
//     "temperature_2m_min": "°F"
//   },
//   "daily": {
//     "time": [
//       "2025-11-10",
//       "2025-11-11",
//       "2025-11-12"
//     ],
//     "weather_code": [3, 73, 3],
//     "temperature_2m_max": [68.3, 46.1, 63],
//     "temperature_2m_min": [39.6, 26, 38.2]
//   }
// }
export function transformOpenMeteoWeatherData(
  data: any, 
  city: string, 
  latitude: number, 
  longitude: number
): WeatherData {
  const current: CurrentWeather = {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    condition: {
      code: data.current.weather_code,
      description: getWeatherDescription(data.current.weather_code),
    },
  };

  const forecast: DailyForecast[] = data.daily.time.map((date: string, index: number) => ({
    date,
    maxTemp: data.daily.temperature_2m_max[index],
    minTemp: data.daily.temperature_2m_min[index],
    condition: {
      code: data.daily.weather_code[index],
      description: getWeatherDescription(data.daily.weather_code[index]),
    },
  }));

  return {
    city,
    latitude,
    longitude,
    current,
    forecast,
  };
}
