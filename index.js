const getapi=async ()=>{
const data =await fetch('https://api.covid19api.com/summary');
// console.log(data);
const res=await data.json();
console.log(res.Countries);
datas = document.getElementById('datas');
const countryName = res.Countries[124];
datas.innerHTML=`<h1>Country: ${countryName.Country}</h1>
<h1>Total Confirmed: ${countryName.TotalConfirmed}</h1>
<h1>Total Deaths: ${countryName.TotalDeaths}</h1>
<h1>Total Recovered: ${countryName.TotalRecovered}</h1>
<h1>New Confirmed: ${countryName.NewConfirmed}</h1>
<h1>New Deaths: ${countryName.NewDeaths}</h1>
<h1>New Recovered: ${countryName.NewRecovered}</h1>
<h1>Date: ${countryName.Date}</h1>
`
}

getapi();



