import axios from 'axios';

const API_KEY = '4fa52b791cd0228644eea9194115d5df';


export const widgetAPI = {
  getData(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`)
      .then(response => response.data)
  }
}