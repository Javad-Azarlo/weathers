
 //`https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`
//https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=c0d9a37b76096b6de4fd718fa40355f5&units=metric 

const frm = document.querySelector("form");
const inpt = document.querySelector("input");
const msg = document.querySelector(".msg");
const ul_cities = document.querySelector(".cities");

frm.addEventListener("submit" , e =>{
   e.preventDefault();
   let inpt_val = inpt.value;
   let key_weather = `c0d9a37b76096b6de4fd718fa40355f5`
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpt_val}&appid=${key_weather}&units=metric&lang=fa`
   fetch(url)
        .then(response => response.json())
        .then(data => {
         const {weather , main , name , sys} = data
         let ico =  `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`

         let li_box = document.createElement("li");
 li_box.classList.add("city");
 let markup = `<h2>
  <span>${sys.country}</span> <span>${name}</span></h2>
  <p class='city-temp'>${Math.round(main.temp)}</p>
  <figure>
         <img class='city-icon' src='${ico}'>
         <figurecaption>${weather[0]["description"]}</figurecaption>
  </figure>
  `;
 li_box.innerHTML = markup;
 ul_cities.appendChild(li_box);
 msg.innerHTML = "";

 console.log(data)
      })
      .catch(error => {
         msg.innerHTML = "نام شهر را به درستی وارد کنید"
      })
      inpt.value = "";
}) 
     
    
    