import { WeatherData } from "@/types/weather";

/**
 * Dummy weather data for development and teaching
 *
 * This data structure mimics the format returned by the Open-Meteo API
 * and our weather service layer
 * All temperatures in Fahrenheit, wind speed in mph
 */
export const DUMMY_WEATHER_DATA: Record<string, WeatherData> = {
  durham: {
    city: "Durham",
    latitude: 35.9940,
    longitude: -78.8986,
    current: {
      temperature: 64,
      feelsLike: 61,
      humidity: 65,
      windSpeed: 7,
      condition: {
        code: 2,
        description: "Partly cloudy",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp: 72,
        minTemp: 57,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp: 75,
        minTemp: 61,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp: 68,
        minTemp: 59,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
    ],
  },
  "new york": {
    city: "New York",
    latitude: 40.7128,
    longitude: -74.0060,
    current: {
      temperature: 59,
      feelsLike: 55,
      humidity: 72,
      windSpeed: 11,
      condition: {
        code: 3,
        description: "Overcast",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp: 63,
        minTemp: 54,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp: 66,
        minTemp: 55,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp: 70,
        minTemp: 57,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
    ],
  },
  tokyo: {
    city: "Tokyo",
    latitude: 35.6762,
    longitude: 139.6503,
    current: {
      temperature: 72,
      feelsLike: 70,
      humidity: 58,
      windSpeed: 5,
      condition: {
        code: 1,
        description: "Mainly clear",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp: 77,
        minTemp: 66,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp: 79,
        minTemp: 68,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp: 73,
        minTemp: 64,
        condition: {
          code: 63,
          description: "Moderate rain",
        },
      },
    ],
  },
  kathmandu: {
    city: "Kathmandu",
    latitude: 27.7103,
    longitude: 85.3222,
    current: {
      temperature: 68,
      feelsLike: 67,
      humidity: 70,
      windSpeed: 4,
      condition: {
        code: 0,
        description: "Clear sky",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp: 72,
        minTemp: 60,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp: 74,
        minTemp: 62,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp: 70,
        minTemp: 61,
        condition: {
          code: 45,
          description: "Foggy",
        },
      },
    ],
  },
  sydney: {
    city: "Sydney",
    latitude: -33.8727,
    longitude: 151.2057,
    current: {
      temperature: 75,
      feelsLike: 73,
      humidity: 60,
      windSpeed: 8,
      condition: {
        code: 2,
        description: "Partly cloudy",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp: 78,
        minTemp: 65,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp: 80,
        minTemp: 67,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp: 76,
        minTemp: 66,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
    ],
  },
  cairo: {
    city: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
    current: {
      temperature: 85,
      feelsLike: 88,
      humidity: 40,
      windSpeed: 10,
      condition: {
        code: 0,
        description: "Clear sky",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp: 90,
        minTemp:  72,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp: 92,
        minTemp: 74,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp: 88,
        minTemp: 73,
        condition: {
          code: 63,
          description: "Moderate rain",
        },
      },
    ],
  },
  seoul: {
    city: "Seoul",
    latitude: 37.5503,
    longitude: 126.9971,
    current: {
      temperature:  68,
      feelsLike: 66,
      humidity: 55,
      windSpeed: 6,
      condition: {
        code: 2,
        description: "Partly cloudy",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        maxTemp:  72,
        minTemp:  61,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        maxTemp:  74,
        minTemp:  63,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        maxTemp:  70,
        minTemp:  62,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
    ],
  },
};

export function getDummyWeatherData(cityName: string): WeatherData | null {
  const key = cityName.toLowerCase();
  return DUMMY_WEATHER_DATA[key] || null;
}
