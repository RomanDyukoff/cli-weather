import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getIcon = (icon) => {
  const iconLib = {
    "01": "☀️",
    "02": "⛅",
    "03": "☁️",
    "04": "🌥️",
    "09": "🌦️",
    10: "🌧️",
    11: "🌩️",
    13: "🌨️",
    50: "🌫️",
  };

  return iconLib[icon.slice(0, -1)];
};

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через коменду -t [API_KEY]"
    );
  }

  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  //   url.searchParams.append("q", city);
  //   url.searchParams.append("appid", token);
  //   url.searchParams.append("lang", "ru");
  //   url.searchParams.append("units", "metric");

  //   https.get(url, (response) => {
  //     let res = "";

  //     response.on("data", (chunk) => {
  //       res += chunk;
  //     });

  //     response.on("end", () => console.log(res));
  //   });

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data;
};

export { getWeather, getIcon };
