const API_KEY = `27c773b22e75b4f9dcffc582e3d38f78`;
const searchWeather = () =>{
    const cityName = document.getElementById("input-name").value;
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}
const displayTemparature = temparature =>{
    console.log(temparature)
}