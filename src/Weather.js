import React from "react";
import axios from "axios";
export default function Weather ({city}) {

    function handleResponse(response) {
        alert(
          `The weather in ${response.data.name} is ${response.data.main.temp} C`);
    }
    let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiURL).then(handleResponse)
return<h2>Hello from weather</h2>
}