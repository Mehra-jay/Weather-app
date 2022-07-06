let weather={
    apikey:"2aa2d4741209d29a0c6c981c31d8721e",
    fetchweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid=" 
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.showweatherreport(data));
    },

    showweatherreport: function(data){
        const {name}=data;
        const { icon , description }=data.weather[0];
        const {temp,humidity,pressure}=data.main;
        const {speed}=data.wind;
        // console.log(name,icon,description,temp,humidity,pressure,speed)
        document.querySelector(".city").innerText=" Weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp + "°C";
        document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
        document.querySelector(".pressure").innerText="Pressure: " + pressure;
        document.querySelector(".wind").innerText="Wind Speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");

        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')"

    },
    
    searchbox: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".searchbox button").addEventListener("click", function(){
    weather.searchbox();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.searchbox();
    }   
});

// weather.fetchweather("ujjain");

// let date=document.getElementById('date');
// let todayDate=new Date();
// date.innerText=dateManage(todayDate);

// function dateManage(dateArg){
//     let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//     let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

//     let year=dateArg.getFullYear();
//     let month=months[dateArg.getMonth()];
//     let date=dateArg.getDate();
//     let day=days[dateArg.getDay()];

//     return `${date} ${month}   ${year}`;

// }




