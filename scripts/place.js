const currentTemp = document.getElementById("temp");
const currentConditions = document.getElementById("conditions");
const currentWindSpeed = document.getElementById("wind-speed");
const currentWindChill = document.getElementById("wind-chill");

currentTemp.textContent = "39";
currentConditions.textContent = "Mostly Cloudy";
currentWindSpeed.textContent = "7";
const tempNum = Number(currentTemp.textContent);
const windNum = Number(currentWindSpeed.textContent);

const calculateWindChill = (temp, wind) => 35.74 + 0.6215*temp - 35.75*wind**0.16 + 0.4275*temp*wind**0.16;
currentWindChill.textContent = tempNum <= 50 && windNum > 3 ? `${calculateWindChill(tempNum, windNum).toFixed(1)} ℉` : "N/A";

