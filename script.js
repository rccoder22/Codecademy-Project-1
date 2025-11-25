const apiKey = "live_ByBO5K46WgYYzRqR2fklSSiptGh0HLX1w4BjlwSKHgDIvnx4t9enTHVpacmkqxb3";
const fact = document.getElementById("cat-fact");
const url = "https://api.thecatapi.com/v1/facts";

const response = fetch(url, {headers: {"x-api-key": apiKey}})
 .then(res => res.json())
  .then(data => console.log(data[0].fact));