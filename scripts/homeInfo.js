//counts the number of visits the user has made
const visitCount = document.querySelector("#visit-count");

let count = 1 + JSON.parse(localStorage.getItem("visitCount"));
visitCount.innerHTML = count;
localStorage.setItem("visitCount", JSON.stringify(count))

//weather info

const APIKey = "d056a432efd9ca509120510ec118fa2c";
const lat = "41.736";
const lon = "-111.834";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;

async function apiFetch(){
    try{
        const response = await fetch(url);

        if(response.ok){
            const data = await response.json();
            displayData(data)

        }
        else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

apiFetch();

function displayData(data){
    const weather = document.querySelector("#weather");
    weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}"> <span>${data.main.temp}°F<br>${data.weather[0].description}</span>`
}