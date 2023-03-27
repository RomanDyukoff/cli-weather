import styles from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${styles.bgRed(" ERROR ")} ${error}`);
};

const printSuccess = (message) => {
  console.log(`${styles.bgGreen(" SUCCESS ")} ${message}`);
};

const printHelp = () => {
  console.log(
    dedent`${styles.bgCyan("HELP")}

    * Без параметров - вывод погоды;

    * -s [CITY] - Устанавливает город;

    * -T [API_KEY] - для сохранения токена;

    * -h help - Вывод помощи;
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${styles.bgYellow(" WEATHER ")} Погода в городе ${res.name}e

    ${icon}  ${res.weather[0].description}

    Температура: ${res.main.temp} (Ощущается как ${res.main.feels_like})

    Влажность: ${res.main.humidity}%

    Скорость веткра: ${res.wind.speed}
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
