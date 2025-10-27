import { notFound } from "next/navigation";
import { getWeatherData } from "@/lib/getWeather";
import { CITIES } from "@/data/cities";
import { CurrentWeatherDetail } from "@/components/CurrentWeatherDetail";
import { ForecastCard } from "@/components/ForecastCard";
import { Button } from "@/components/ui/Button";

/**
 * All Cities Weather Page
 *
 * Displays current weather and forecast for all predefined cities
 */

export default async function AllCityWeatherPage() {
  // Fetch weather data for all cities
  const weatherData = CITIES.map((city) =>
    getWeatherData(city.name)
  );
//   const allWeatherData = await Promise.all(weatherDataPromises);

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
          {weatherData.map((weather) =>
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