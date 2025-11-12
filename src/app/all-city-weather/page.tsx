"use client";

import { CITIES } from "@/data/cities";
import { CurrentWeatherDetail } from "@/components/CurrentWeatherDetail";
import { ForecastCard } from "@/components/ForecastCard";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { WeatherData } from "@/types/weather";
import { getWeatherData } from "@/lib/getWeather";
import { LoadingState } from "@/components/LoadingState";

/**
 * All Cities Weather Page
 *
 * Displays current weather and forecast for all predefined cities
 */

export default function AllCityWeatherPage() {
  // Fetch weather data for all cities
  const [weatherData, setWeathers] = useState<WeatherData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
      loadCitiesWeather();
    }, []);

    const loadCitiesWeather = async () => {
        setLoading(true);
        setError("");
        await new Promise((resolve) => setTimeout(resolve, 500));
        let weathers: WeatherData[] = [];
        for (const city of CITIES) {
            const cityName = city.name;
            const transformedData = await getWeatherData(cityName);
            console.log("Transformed Weather Data:", transformedData);
            weathers.push(transformedData);
          }

        const data = weathers;
        if (data) {
        setWeathers(data);
        } else {
        setError(`Failed to load all weather data`);
        }

        setLoading(false);
    };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <main className="max-w-6xl mx-auto space-y-12">
       <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            All Cities Weather
          </h1>
          <Button href="/" variant="ghost">
            ← Back to Home
          </Button>
        </div>
        <div>  
           {loading && <LoadingState />}
          {error && <p className="text-red-500">Error: {error}</p>} 
        </div>
          {weatherData && weatherData.map((weather) =>
            weather ? (
              <div key={weather.city} className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-6">
                    {weather.city}
                </h2>
                <CurrentWeatherDetail current={weather.current} latitude={weather.latitude} longitude={weather.longitude} />
                <div className="mt-4 space-y-2">
                    <ForecastCard key={weather.city} forecast={weather.forecast} />
                </div>
              </div>
            ) : null
          )}
      </main>
    </div>
  );
}