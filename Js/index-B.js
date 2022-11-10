const API_KEY = `27c773b22e75b4f9dcffc582e3d38f78`;
const searchWeather = () =>{
    const cityName = document.getElementById("input-name").value;
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}
const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature =>{
    console.log(temparature.weather[0].icon);
    setInnerText('city', temparature.name);
    setInnerText('temperature', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);
    // set weather icon
    const url = ` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png ` 
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url)
}