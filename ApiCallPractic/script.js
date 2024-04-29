const data = document.getElementById("data");
const btn = document.getElementById("btn");
const cn = document.getElementById("cn");
const tem = document.getElementById("tem");
const time = document.getElementById("time");
let api = "450d068ccabc84c4e443419c395fd1ff"
 async function fat(country) {
   let se  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=Metric&appid=${api}`)
    return  await se.json()
}
btn.addEventListener("click", async() => {
    const value = data.value;
    const result = await fat(value);
    console.log('✌️result --->', result);
    cn.innerHTML = result.name;
    tem.innerHTML = result.main.temp;
    time.innerHTML = result.timezone;
    
 })