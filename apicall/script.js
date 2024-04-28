const search = document.getElementById("search");
const btn = document.getElementById("btn");
const cn = document.getElementById("cn");
const time = document.getElementById("time");
const th = document.getElementById("th");
 async function getData(countryName) {
     let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=51041f8e2efc48229bb95031242604&q=${countryName}&aqi=yes`
     );
     return await data.json();
}
btn.addEventListener("click", async() => {
    const value = search.value;
    const result =  await getData(value);
    console.log('✌️result --->', result);
    cn.innerText = `${result.location.name} ${result.location.region} ${result.location.country}`
    time.innerText = result.location.localtime;
    th.innerText = result.current.temp_c;
    
});










