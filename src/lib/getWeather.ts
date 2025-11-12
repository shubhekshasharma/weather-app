import { getCityByName } from "@/data/cities";
import { getOpenMeteoUrl, fetchOpenMeteoWeatherData } from "@/api/open-meteo";
import { transformOpenMeteoWeatherData } from "@/types/weather";

export async function getWeatherData (cityName: string): Promise<any> {
    // This function can be used to fetch weather data directly by city name
    const currentCity = getCityByName(cityName);
        const lat = currentCity?.latitude;
        const long = currentCity?.longitude;
        const url = getOpenMeteoUrl(lat!, long!);
        console.log(`Open-Meteo URL: ${url}`);
        const openMeteoWeatherData = await fetchOpenMeteoWeatherData(lat!, long!);
        console.log("openMeteoWeatherData Promise:", openMeteoWeatherData);
        const transformedData = transformOpenMeteoWeatherData(
          openMeteoWeatherData,
          cityName,
          lat!,
          long!
        );
        console.log("Transformed Weather Data:", transformedData);
        return transformedData;
}