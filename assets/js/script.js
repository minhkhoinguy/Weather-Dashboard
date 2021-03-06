var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')
var time = document.querySelector('.time')
var body = document.querySelector('body')



async function weatherDashboard () {
    let capitalSearch = search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=cb8d857e9528680474d1a7a90b239fba`

    let data = await fetch(apiUrl).then(res=> res.json())
    console.log(data);
    city.textContent = data.name
    country.textContent = data.sys.country 
    visibility.textContent = data.visibility + 'm'
    wind.textContent = data.wind.speed + 'm/s'
    humidity.textContent = data.main.humidity + '%'
    let temp = Math.round((data.main.temp - 273.15)*1.8 + 32) 
    if(temp < 32) {
        body.setAttribute('class','cold')
    } else {
        body.setAttribute('class','warm')
    }
    temp += '°F'
    value.textContent = temp
    shortDesc.textContent = data.weather[0] ? data.weather[0].main: ''
    time.textContent = new Date().toLocaleString('us')
    console.log(temp)


}
search.addEventListener('keypress', function(e){
    if (e.code === 'Enter'){
        weatherDashboard()
    }
})
