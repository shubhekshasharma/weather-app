const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export function getOpenMeteoUrl(latitude: number, longitude: number): string {
    // https://api.open-meteo.com/v1/forecast?
    // latitude=52.52&longitude=13.41&
    // current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&
    // temperature_unit=fahrenheit&
    // forecast_days=3&
    // daily=weather_code,temperature_2m_max,temperature_2m_min
    const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        current: "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code",
        temperature_unit: "fahrenheit",
        forecast_days: "3",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
    });
    return `${BASE_URL}?${params.toString()}`;
}

export async function fetchOpenMeteoWeatherData(latitude: number, longitude: number): Promise<any> {
    const url = getOpenMeteoUrl(latitude, longitude);
    return await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            throw error;
        })
    }