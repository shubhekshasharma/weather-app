import { CurrentWeather } from "@/types/weather";
import { WeatherIcon } from "./WeatherIcon";

interface CurrentWeatherCardProps {
  current: CurrentWeather;
  city: string;
}

export function CurrentWeatherCard({
  current,
  city,
}: CurrentWeatherCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-600/40 overflow-hidden
                    before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-br before:from-blue-400/20 before:to-purple-400/20 before:-z-10 before:blur-xl
                    after:absolute after:inset-0 after:rounded-3xl after:shadow-[0_0_80px_rgba(59,130,246,0.15)] after:-z-20">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-white mb-1">
          {city}
        </h2>
        <p className="text-sm text-slate-400 mb-8">Current Weather</p>

        {/* Main content - Temp on left, icon on right */}
        <div className="flex items-center justify-between gap-12 mb-8">
          <div>
            <div className="text-7xl font-bold text-white mb-2">
              {current.temperature}°F
            </div>
            <p className="text-xl text-slate-300">
              {current.condition.description}
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <WeatherIcon code={current.condition.code} size="xl" />
          </div>
        </div>

        {/* Bottom row - Details horizontally */}
        <div className="grid grid-cols-3 gap-8">
          <div className="min-w-[100px]">
            <p className="text-sm text-slate-400 mb-1">
              Feels Like
            </p>
            <p className="text-2xl font-bold text-white">
              {current.feelsLike}°F
            </p>
          </div>
          
          <div className="min-w-[100px]">
            <p className="text-sm text-slate-400 mb-1">
              Humidity
            </p>
            <p className="text-2xl font-bold text-white">
              {current.humidity}%
            </p>
          </div>
          
          <div className="min-w-[100px]">
            <p className="text-sm text-slate-400 mb-1">
              Wind Speed
            </p>
            <p className="text-2xl font-bold text-white">
              {current.windSpeed} mph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
