const apiKey="863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
async function weatherinfo(city){

    const response= await fetch(apiUrl + city + `&appid =${apiKey}`);
    let data=await response.json();
    console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed +"Km/h";

searchBtn.addEventListener("click",()=>{
    weatherinfo(searchBox.value);
    console.log("button pressed");
})




}