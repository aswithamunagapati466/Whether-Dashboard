async function getWeather(){

let city =
document.getElementById("city").value;

let weather =
document.getElementById("weather");

if(city==""){
weather.innerHTML="<p>Enter City Name</p>";
return;
}

try{

let response =
await fetch(`https://wttr.in/${city}?format=j1`);

let data =
await response.json();

let current =
data.current_condition[0];

weather.innerHTML=`

<div class="card">

<h2>${city}</h2>

<p>Temperature :
${current.temp_C} °C</p>

<p>Humidity :
${current.humidity}%</p>

<p>Wind Speed :
${current.windspeedKmph} km/h</p>

<p>Condition :
${current.weatherDesc[0].value}</p>

</div>

`;

}

catch(error){

weather.innerHTML=
"<p>Unable to fetch data</p>";

}

}
