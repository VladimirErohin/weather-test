import axios from "axios";

export default class WeatherService {
    static async getWeatherData(state: string, apiKey: string) {
        const response =
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`);
        return response.data
    }

    static async getWeatherForecast(coordLat: number, coordLon: number, apiKey: string) {
        const response = await
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordLat}&lon=${coordLon}&appid=${apiKey}`)
        return response.data
    }
}