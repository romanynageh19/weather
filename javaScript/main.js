let searchInPut=document.getElementById('search')
console.log(searchInPut);
city=searchInPut.value;
console.log(city)



    async function getWeather (){
  let weather=  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=07112&days=7`)
   let finalweather=await weather.json()
   
  console.log(finalweather);

  temp=` <div class="col-4  ">
  
  <div class="card " style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title "> today</h5>
      <p class="card-text">
      ${finalweather.location.name}
      </p>
      <div class="num">
      ${finalweather.current.temp_c}
        
        <sup>o</sup>
        c
        <img src="img/113.png">
      </div>
      <div class="sunny">
        <h6>sunny</h6>
      <span class="p-2">  <img src="img/icon-umberella.png" >20%</span>
      <span class="p-2">  <img src="img/icon-compass.png">20%</span>
      <span class="p-2">  <img src="img/icon-wind.png" >20%</span>
  
      </div>
    </div>
  </div>
  </div>`
  let dataNextDay=finalweather.forecast.forecastday
  console.log(dataNextDay);
  for (let i = 0;i < 2; i++) {
    temp+=` <div class="col-4">
    <div class="card" style="width: 18rem;">
     
      <div class="card-body text-center">
        <img src="${dataNextDay[i].day.condition.icon}">
      
               
        <div class="num">
          ${dataNextDay[i].day.maxtemp_c}<sup>o</sup>c
        </div>

        
      </div>
    </div>
  </div>`
    
    console.log(dataNextDay[i].day.condition.icon);
  }
  document.getElementById("data").innerHTML=temp
}



    
    
  
 getWeather()
 