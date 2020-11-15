let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon")
let tempValue = document.getElementById("temp-value");
let tempUnit = document.getElementById("temp-unit");
let climate = document.getElementById("climate");
let iconFile; 
cityName = document.getElementById("cNm");


sbmt.addEventListener("click", () => {
let long;
let lat;
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position) => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const proxy ="https://cors-anywhere.herokuapp.com/";
    const api = `
    ${proxy}api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=9afd12c2e4b2208e8c6b99df137c1d9a`;
  

    fetch(api)
    .then((response) =>{
       return response.json();
    })
    .then((data) =>{
      
      const {name} = data;
      const {feels_like} = data.main;
      const {id, main} = data.weather[0];
      loc.textContent = name;
      climate.textContent = main;
      tempValue.textContent = Math.round(feels_like - 273);
      document.getElementById('temp').style.display ='block';
      if (id<250){
        tempIcon.src = './icon/storm.svg' ;
      }
      else if (id<350){
        tempIcon.src = './icon/drizzle.svg' ;
      }
      else if (id<550){
        tempIcon.src = './icon/rain.svg' ;
      }
      else if (id<650){
        tempIcon.src = './icon/snow.svg' ;
      }
      else if (id<800){
        tempIcon.src = './icon/atmosphere.svg' ;
      }
      else if (id===800){
        tempIcon.src = './icon/sun.svg' ;
      }
      else if(id>800){
        tempIcon.src = './icon/clouds.svg' ;
      }
      console.log(data);
      
    })
  })
}
});










































/*let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon")
let tempValue = document.getElementById("temp-value");
let tempUnit = document.getElementById("temp-unit");
let climate = document.getElementById("climate");
let iconFile; 
window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fb432b1c02b03d4b64d1edf087066a08`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { name } = data;
          const { feels_like, temp, temp_max, temp_min } = data.main;
          const { id, icon, main } = data.weather[0];
          tempValue.textContent = Math.round(feels_like - 273);
          loc.textContent = name;
          climate.textContent = main;
          if (id<250){
            tempIcon.src = './icons/storm.svg' ;
          }
          else if (id<350){
            tempIcon.src = './icons/drizzle.svg' ;
          }
          else if (id<550){
            tempIcon.src = './icons/rain.svg' ;
          }
          else if (id<650){
            tempIcon.src = './icons/snow.svg' ;
          }
          else if (id<800){
            tempIcon.src = './icons/atmosphere.svg' ;
          }
          else if (id===800){
            tempIcon.src = './icons/sun.svg' ;
          }
          else if(id>800){
            tempIcon.src = './icons/clouds.svg' ;
          }
          console.log(
            Math.round(temp - 273),
            Math.round(temp_max - 273),
            Math.round(temp_min - 273)
          );
          console.log(name);
        });
    });
  }
});
*/