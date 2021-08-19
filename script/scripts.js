
$(document).ready(function () {
    setInterval(function () {
        let index = $('img.active').index();
        $('img.active').hide().removeClass('active').next().show().addClass('active');
        if (index == $("img:last-child").index()) {
            $("img:first-child").show().addClass("active")
        }
    }, 3000)
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yy = String(today.getFullYear());
    today = `${mm},${dd},${yy}`;
    let p_date = document.querySelector('p.date');
    p_date.innerHTML = today;
    $('span.degree p').click(function () {
        $(this).addClass('seted').siblings().removeClass('seted')
    })
    const searchBtn = document.querySelector('i.fas.fa-arrow-right');
    const cityName = document.querySelector('span h2');
    const cardBody = document.querySelector('.big-data');
    const error22 = document.querySelector('.error p');
    const degerSeter = document.querySelector('span.degree p')
    const Default = document.querySelector('.shower')
    const degershow = document.querySelector('.shower h1')
    const iconShower = document.querySelector('.icon-weaher')
    
    const spiOutCelcius = (kelvin) => {
        celcius = Math.round(kelvin - 273.15);
        return celcius;
    }
    const spiOutfashrenheit = (kelvin) => {
        fahrenheit = Math.round(kelvin * 9 / 5 - 459.67);
        return fahrenheit;
    }
    istanbul_weather=(istanbul)=>{
        if($('span.degree p:nth-child(1)').hasClass('seted')){
            degershow.innerHTML = spiOutfashrenheit(istanbul.main.temp) + '&deg;';
        }else{
            degershow.innerHTML = spiOutCelcius(istanbul.main.temp) + '&deg;';
        }
        $('span.degree p:nth-child(1)').click(function () {
            degershow.innerHTML = spiOutfashrenheit(city.main.temp) + '&deg;';
        })
        $('span.degree p:nth-child(2)').click(function () {
            degershow.innerHTML = spiOutCelcius(city.main.temp) + '&deg;';
        })
        if (city.weather[0].description == "clear sky") {
            iconShower.innerHTML = `<i class="icon fas fa-sun"></i>`

        }
        if (city.weather[0].description == "few clouds") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud-sun"></i>`

        }
        if (city.weather[0].description == "heavy intensity snow") {
            iconShower.innerHTML = `<i class="icon wi wi-snow-wind"></i>`

        }
        if (city.weather[0].description == "overcast clouds") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud"></i>
            <i class="icon fas fa-cloud clouds  "></i>`
        }
        if (city.weather[0].description == "heavy intensity rain") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud-showers-heavy"></i>`

        }
        if (city.weather[0].description == "moderate snow") {
            iconShower.innerHTML = `<i class="fas fa-cloud-meatball"></i>`

        }
        if (city.weather[0].description == "moderate rain") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud-rain"></i>`

        }
        if (city.weather[0].description == "thunderstorm with light rain") {
            iconShower.innerHTML = `<i class="icon wi wi-storm-showers"></i>`

        }
        if (city.weather[0].description == "thunderstorm with light snow") {
            iconShower.innerHTML = `<i class="icon wi wi-storm-showers"></i>`

        }
        if (city.weather[0].description == "thunderstorm with rain") {
            iconShower.innerHTML = `<i class="icon wi wi-thunderstorm"></i>`

        }
        if (city.weather[0].description == "broken clouds") {
            iconShower.innerHTML = `<i class="icon wi wi-cloudy"></i>`

        }
        if (city.weather[0].description == "thunderstorm with snow") {
            iconShower.innerHTML = `<i class="icon wi wi-storm-showers"></i>`

        }
    }
    requestCity('istanbul')

            .then((data) => { updateWeatherApp(data) })
            .catch((erorr) => {
            })

    updateWeatherApp = (city) => {
        if (city.name) {
            cityName.innerHTML = city.name;
        } else {
            error22.innerHTML = "Not found !! Please enter the city name correctly";
        }
        if($('span.degree p:nth-child(1)').hasClass('seted')){
            degershow.innerHTML = spiOutfashrenheit(city.main.temp) + '&deg;';
        }else{
            degershow.innerHTML = spiOutCelcius(city.main.temp) + '&deg;';
        }
        $('span.degree p:nth-child(1)').click(function () {
            degershow.innerHTML = spiOutfashrenheit(city.main.temp) + '&deg;';
        })
        $('span.degree p:nth-child(2)').click(function () {
            degershow.innerHTML = spiOutCelcius(city.main.temp) + '&deg;';
        })
        if (city.weather[0].description == "clear sky") {
            iconShower.innerHTML = `<i class="icon fas fa-sun"></i>`

        }
        if (city.weather[0].description == "few clouds") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud-sun"></i>`

        }
        if (city.weather[0].description == "heavy intensity snow") {
            iconShower.innerHTML = `<i class="icon wi wi-snow-wind"></i>`

        }
        if (city.weather[0].description == "overcast clouds") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud"></i>
            <i class="icon fas fa-cloud clouds  "></i>`
        }
        if (city.weather[0].description == "heavy intensity rain") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud-showers-heavy"></i>`

        }
        if (city.weather[0].description == "moderate snow") {
            iconShower.innerHTML = `<i class="fas fa-cloud-meatball"></i>`

        }
        if (city.weather[0].description == "moderate rain") {
            iconShower.innerHTML = `<i class="icon fas fa-cloud-rain"></i>`

        }
        if (city.weather[0].description == "thunderstorm with light rain") {
            iconShower.innerHTML = `<i class="icon wi wi-storm-showers"></i>`

        }
        if (city.weather[0].description == "thunderstorm with light snow") {
            iconShower.innerHTML = `<i class="icon wi wi-storm-showers"></i>`

        }
        if (city.weather[0].description == "thunderstorm with rain") {
            iconShower.innerHTML = `<i class="icon wi wi-thunderstorm"></i>`

        }
        if (city.weather[0].description == "broken clouds") {
            iconShower.innerHTML = `<i class="icon wi wi-cloudy"></i>`

        }
        if (city.weather[0].description == "thunderstorm with snow") {
            iconShower.innerHTML = `<i class="icon wi wi-storm-showers"></i>`

        }
        cardBody.innerHTML = `
                    <p><a href="#">${city.weather[0].description}</a></p>
                    <p>Humidity <a href="#">${city.main.humidity}%</a></p>
                    <p>Wind: <a href="#">${city.wind.speed}km/h</a></p>`

    }
    
    searchBtn.addEventListener('click', e => {
        error22.innerHTML = "";
        let searchValue = document.querySelector('.search input').value;
        e.preventDefault();
        var citySerched = searchValue;
        searchValue = "";
        requestCity(citySerched)

            .then((data) => { updateWeatherApp(data) })
            .catch((erorr) => {
            })
    })
    
})
