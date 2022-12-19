const getapi=async ()=>{
const data =await fetch('https://api.covid19api.com/summary');
// console.log(data);
const res=await data.json();
console.log(res.Countries);
datas = document.getElementById('datas');
datas.innerHTML=`<h1>Country: ${res.Countries[124].Country}</h1>
<h1>Total Confirmed: ${res.Countries[124].TotalConfirmed}</h1>
<h1>Total Deaths: ${res.Countries[124].TotalDeaths}</h1>
<h1>Total Recovered: ${res.Countries[124].TotalRecovered}</h1>
<h1>New Confirmed: ${res.Countries[124].NewConfirmed}</h1>
<h1>New Deaths: ${res.Countries[124].NewDeaths}</h1>
<h1>New Recovered: ${res.Countries[124].NewRecovered}</h1>
<h1>Date: ${res.Countries[124].Date}</h1>
`
}

getapi();



