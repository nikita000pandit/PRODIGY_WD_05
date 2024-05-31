let searchButton=document.querySelector(".searchButton")
let city=document.querySelector(".city")
let temp=document.querySelector(".temp")
let feels_like=document.querySelector(".feels-like")
let hum=document.querySelector(".hum")
let win=document.querySelector(".win")
let inputBox=document.querySelector(".inputBox")
let invalid=document.querySelector(".invalid")
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const key="5014323efe251489dec3058e16fb64bf"
function closeError(){
  invalid.style.display="none"
  document.querySelector(".outer").style.height="50px"
    inputBox.value=""
}
async function weatherFun(x){
 const response=await fetch(url+x+`&appid=${key}`)
 if(response.status==404){
    document.querySelector(".outer").style.height="80px"
        invalid.style.display="block"
          setTimeout("closeError()",2000)
 }
 else{
    document.querySelector(".outer").style.marginTop="20px"
    document.querySelector(".weather-details").style.display="block"
    document.querySelector(".outer").style.height="90vh"
    var data= await response.json()
    console.log(data)
    city.innerHTML=data.name
temp.innerHTML=Math.round(data.main.temp)+"°C"
hum.innerHTML=data.main.humidity+"%"
win.innerHTML=data.wind.speed+" km/hr"
feels_like.innerHTML="feels like "+Math.round(data.main.feels_like)+"°C"
if(data.weather[0].main=="Clouds"){
    document.querySelector(".weather").src="../public/assets/clouds.png"
    document.querySelector(".description").innerHTML=data.weather[0].description
}
else if(data.weather[0].main=="Clear"){
    document.querySelector(".weather").src="../public/assets/clear.png"
    document.querySelector(".description").innerHTML=data.weather[0].description
}
else if(data.weather[0].main=="Rain"){
    document.querySelector(".weather").src="../public/assets/rain (1).png"
    document.querySelector(".description").innerHTML=data.weather[0].description
}
else if(data.weather[0].main=="Drizzle"){
    document.querySelector(".weather").src="../public/assets/drizzle.png"
    document.querySelector(".description").innerHTML=data.weather[0].description
}
else if(data.weather[0].main=="Mist"){
    document.querySelector(".weather").src="../public/assets/mist.png"
    document.querySelector(".description").innerHTML=data.weather[0].description
}
setTimeout("close()",2000)
 }

}
function close(){
    document.querySelector(".weather-details").style.display="none"
    document.querySelector(".outer").style.height="50px"
    document.querySelector(".outer").style.marginTop="40vh"
    inputBox.value=""
}
searchButton.addEventListener("click",()=>{
   weatherFun(inputBox.value)
})


