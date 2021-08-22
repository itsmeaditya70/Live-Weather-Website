const weatherApi={
    key:"157469ec527f48d8a3c19e58a23091e0",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"

}


//to get input value

const searchInputBox=document.getElementById('search-box');

searchInputBox.addEventListener('keypress',(event)=>{

    if(event.keyCode==13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display='block';

    }
});

//get weather report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
}).then(showWeatherReport);



/********* show weather report  ***********/


function showWeatherReport(weather){

    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temp=document.getElementById('temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let high_temp=document.getElementById('high');
    high_temp.innerHTML=`${Math.round(weather.main.temp_max)}&deg;C / `;

    let low_temp=document.getElementById('low');
    low_temp.innerHTML=`${Math.round(weather.main.temp_min)}&deg;C`;

    let wind_speed=document.getElementById('wind-data');
    wind_speed.innerHTML=`${weather.wind.speed} m/s`;

    let humidity=document.getElementById('humidity-data');
    humidity.innerHTML=`${weather.main.humidity} %`;

    let visibility_data=document.getElementById('visibility-data');
    visibility_data.innerHTML=`${Math.round(weather.visibility/1000)} km`;

    let weather_type=document.getElementById('weather-type');
    weather_type.innerHTML=`${weather.weather[0].main}`;


    /********** change background img according to weather ************* */


    if(weather_type.textContent=="Clear"){
        document.body.style.backgroundImage="url('clear.jpg')";
    }else if(weather_type.textContent=="Clouds"){
        document.body.style.backgroundImage="url('cloud.jpg')";
    }else if(weather_type.textContent=="Haze"){
        document.body.style.backgroundImage="url('haze.jpg')";
    }else if(weather_type.textContent=="Mist"){
        document.body.style.backgroundImage="url('mist.jpg')";
        
    }else if(weather_type.textContent=="Rain"){
        document.body.style.backgroundImage="url('rain.jpg')";
    }else if(weather_type.textContent=="Thunderstorm"){
        document.body.style.backgroundImage="url('thunderstorm.jpg')";
    }else if(weather_type.textContent=="Snow"){
        document.body.style.backgroundImage="url('snow.jpg')";
    }else if(weather_type.textContent=="Fog"){
        document.body.style.backgroundImage="url('fog.jpg')";
    }


/*********************** for weather-icon ************************ */

    let weather_icon=document.getElementById('weather-icon');

    // for cloudy weather

    if(weather_type.textContent=='Clouds')
    {
        weather_icon.src='http://openweathermap.org/img/wn/04d@2x.png';
    } 


    // for rainy weather


    if(weather_type.textContent=='Rain')
    {
        weather_icon.src='http://openweathermap.org/img/wn/09d@2x.png';
    } 

    // for thundestorm

    if(weather_type.textContent=='Thunderstorm')
    {
        weather_icon.src='http://openweathermap.org/img/wn/11d@2x.png';
    } 

    //for clear weather

    if(weather_type.textContent=='Clear')
    {
        weather_icon.src='http://openweathermap.org/img/wn/01d@2x.png';
    } 

    // for snow

    if(weather_type.textContent=='Snow')
    {
        weather_icon.src='http://openweathermap.org/img/wn/13d@2x.png';
    } 


    //for mist

    if(weather_type.textContent=='Mist')
    {
        weather_icon.src='http://openweathermap.org/img/wn/50d@2x.png';
    } 

    // for haze

   if(weather_type.textContent=='Haze')
{
    weather_icon.src='http://openweathermap.org/img/wn/50d@2x.png';
}   

   // for fog

   if(weather_type.textContent=='Fog')
{
    weather_icon.src='http://openweathermap.org/img/wn/50d@2x.png';
}   

    
}
}
