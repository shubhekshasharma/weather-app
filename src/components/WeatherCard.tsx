import { CurrentWeather } from "@/types/weather";
import { CurrentWeatherCard } from "./CurrentWeatherCard";

/**
 * Basic weather card - no styling, just data display
 * Perfect for teaching how to start with data and gradually add styling
 */

interface WeatherCardProps {
  city: string;
  weather: CurrentWeather;
}

export function WeatherCard({ city, weather }: WeatherCardProps) {
  return (
    <div>
      <CurrentWeatherCard current={weather} city={city} />
    </div>
  );
}
