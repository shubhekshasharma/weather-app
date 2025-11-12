export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

export const CITIES: City[] = [
  {
    name: "Durham",
    latitude: 35.9940,
    longitude: -78.8986,
  },
  {
    name: "New York",
    latitude: 40.7128,
    longitude: -74.0060,
  },
  {
    name: "Tokyo",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    name: "Kathmandu",
    latitude: 27.7103,
    longitude: 85.3222,
  },
  {
    name: "Sydney",
    latitude: -33.8727,
    longitude: 151.2057,
  },
  {
    name: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    name: "Seoul",
    latitude: 37.5503,
    longitude: 126.9971,
  },
  {
  name: "Unknown City",
  latitude: 0,
  longitude: 0,
  },
  {
  name: "Lost City",
  latitude: 0,
  longitude: 0,
  }
];

export function getCityByName(name: string): City | undefined {
  return CITIES.find(
    (city) => city.name.toLowerCase() === name.toLowerCase()
  );
}

export function getRandomCity(): City {
  const randomIndex = Math.floor(Math.random() * CITIES.length);
  return CITIES[randomIndex];
}