// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric
const uiMaker = (data) => {
  let temp = `<div class="weather__header">
            <form class="weather__search">
                <input type="text" placeholder="Search for a city..." class="weather__searchform">
                <i class="fa-solid fa-magnifying-glass"></i>
            </form> 
            <div class="weather__units">
                <span class="weather_unit_celsius">&#176C</span>
                <span class="weather_unit_farenheit">&#176F</span>
            </div>
        </div>
        <div class="weather__body">
            <h1 class="weather__city"></h1>
            <div class="weather__datetime">
            </div>
            <div class="weather__forecast"></div>
            <div class="weather__icon">
            </div>
            <p class="weather__temperature">
            ${data.main.temp}
            </p>
            <div class="weather__minmax">
                <p>Min: 12&#176</p>
                <p>Max: 16&#176</p>
            </div>
        </div>

        <div class="weather__info">
            <div class="weather__card">
                <i class="fa-solid fa-temperature-full"></i>
                <div>
                    <p>Real Feel</p>
                    <p class="weather__realfeel">18&#176</p>
                </div>
            </div>
            <div class="weather__card">
                <i class="fa-solid fa-droplet"></i>
                <div>
                    <p>Humidity</p>
                    <p class="weather__humidity">18&#176</p>
                </div>
            </div>
            <div class="weather__card">
                <i class="fa-solid fa-wind"></i>
                <div>
                    <p>Wind</p>
                    <p class="weather__wind">18&#176</p>
                </div>
            </div>
            <div class="weather__card">
                <i class="fa-solid fa-gauge-high"></i>
                <div>
                    <p>Pressure</p>
                    <p class="weather__pressure">18&#176</p>
                </div>
            </div>
        </div>`;
  document.getElementById("output").innerHTML = temp;
};
const getWeather = async (cityName) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
  );
  let res = await req.json();
  console.log(res);
  uiMaker(res);
};

document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let cityName = e.target.value;
    console.log(cityName);
    getWeather(cityName);
  }
});
