// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//build url
const APIKey = "d056a432efd9ca509120510ec118fa2c";
const lat = "49.75";
const lon = "6.63";

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
    currentTemp.textContent = `${data.main.temp}°`;
    weatherIcon.setAttribute("src" , `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    weatherIcon.setAttribute("alt", data.weather[0].description)
    captionDesc.textContent = data.weather[0].description;
}