const res = fetch("https://restcountries.com/v3.1/all");
res
    .then((data) => data.json())
    .then((data1) => {
        for (let i = 0; i < data1.length; i++) {
            console.log(data1[i]);
            let div = document.createElement("div");
            div.innerHTML = `<div class="row col-lg-4 col-sm-12">
         <div class="col">
           <div class="card">
           <div class="card-header text-center">${data1[i].name.common}</div>
             <img src="${data1[i].flags.png}" class="card-img-top" alt="country-flag">
             <div class="card-body">
               <p class="card-text"><b><i>Capital: ${data1[i].capital}</i></b></p>
               <p class="card-text"><b><i>Region: ${data1[i].region}</b></p>
               <p class="card-text"><b><i>SubRegion: ${data1[i].subregion}</i></b></p>
               <p class="card-text"><b><i>Population: ${data1[i].population}</i></b></p>
               <p class="card-text"><b><i>Latlng: ${data1[i].latlng}</i></b></p>
               <p class="card-text"><b><i>Country Code: ${data1[i].cca3}</i></b></p>
               <button class="btn btn-primary" onclick="getWeatherData('${data1[i].name.common}')">Click for Weather</button>
               </div>
             </div>
           </div>
        </div>`;
            document.body.append(div);
        }
    });
function getWeatherData(restCountryName) {
    var apiKey = "eebfc7ad50c4a39e555028ff4aee7c38";
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;

    fetch(weatherUrl)
        .then((response) => response.json())
        .then((weatherData) => {
            var weatherCountryName = weatherData.name;

            if (weatherCountryName === restCountryName) {
                alert(
                    `Weather in ${weatherData.name}: mininum: ${weatherData.main.temp_min} degree celcius & maximum: ${weatherData.main.temp_max} degree celcius`
                );
            } else {
                alert("Country name does not match.");
            }
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert`Error fetching weather data.`;
        });
}