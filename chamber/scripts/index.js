const APIKey = "d056a432efd9ca509120510ec118fa2c";
const lat = "41.736";
const lon = "-111.834";

const urlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=4&units=imperial&appid=${APIKey}`;

async function apiFetch(url, func){
    try{
        const response = await fetch(url);

        if(response.ok){
            const data = await response.json();
            func(data)

        }
        else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}


apiFetch(urlForecast, displayData)

function displayData(data){

    const weatherCurrent = document.querySelector("#weather-current");
    weatherCurrent.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png" alt="${data.list[0].weather[0].description}"><span>${data.list[0].temp.day}°F<br>${data.list[0].weather[0].description}</span>`

    const weather = document.querySelector("#weather-forecast");

    for(let i = 1; i <= 3; i++){
        let dayData = {
            dayDate: data.list[i].dt,
            tempMax: data.list[i].temp.max,
            weatherDesc: data.list[i].weather[0].main,
            weatherDescIcon: data.list[i].weather[0].icon
        };

        console.log(new Date(dayData.dayDate * 1000).toLocaleDateString('en-US', { weekday: 'long' }));
        console.log(dayData);

        const day = document.createElement("div");

        const img = document.createElement("img");
        const desc = document.createElement("span");
        const temp = document.createElement("span");

        img.setAttribute("src", `https://openweathermap.org/img/wn/${dayData.weatherDescIcon}.png`)
        img.setAttribute("alt", `picturn of ${dayData.weatherDesc}`)

        desc.textContent = dayData.weatherDesc;

        temp.textContent = `${dayData.tempMax}°F`

        day.appendChild(img);
        day.appendChild(desc);
        day.appendChild(temp);

        weather.appendChild(day);

    }
}
