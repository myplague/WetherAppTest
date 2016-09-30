$.ajax({
       url: "http://ipinfo.io/json",

       success: function(res) {
         console.log(res);
         console.log(res.city);
         $("#ciudad").html("Ciudad:" + " " +  res.city);



$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?zip="+ res.postal +",us&appid=aebb13fe929de5b1d6b3355ef5dc181c",
  success: function(res2){
           $("#temperatura").html("Temperatura:" + " " + Math.round((res2.main.temp - 273.15 )) + " C");
           $("#humedad").html("Humedad:" + " "+ res2.main.humidity + "%");
           $("#weather").html("Weather:" + " "+ res2.weather[0].description);

           console.log(res2);

  }



})

       }
   });
