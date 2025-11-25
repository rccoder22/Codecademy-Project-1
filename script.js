const apiKey = "live_ByBO5K46WgYYzRqR2fklSSiptGh0HLX1w4BjlwSKHgDIvnx4t9enTHVpacmkqxb3";
const fact = document.getElementById("cat-fact");
const url = "https://catfact.ninja/fact";

const response = fetch(url)
 .then(res => res.json())
  .then(data => console.log(data.fact));