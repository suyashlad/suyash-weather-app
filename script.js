document.addEventListener("DOMContentLoaded", function() {
    const weatherContainer = document.getElementById('weather-container');
    const loading = document.getElementById('loading');
    const weatherData = document.getElementById('weather-data');
    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');

    // OpenWeatherMap free API key (replace with your own key)
    const apiKey = 'd7c2ce16979dbbcd17c46a6749d63908';

    searchButton.addEventListener('click', function() {
        const city = cityInput.value.trim();

        if (city === '') {
            alert('Please enter a city name.');
            return;
        }

         // OpenWeatherMap API endpoint for current weather
         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        
        // Fetch weather data from the OpenWeatherMap API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                loading.style.display = 'none';
                weatherData.style.display = 'block';

                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                document.getElementById('weather-icon').src = iconUrl;
                document.getElementById('temperature').innerText = `${temperature} °C`;
                document.getElementById('description').innerText = description;
            })
            .catch(error => {
                loading.innerText = 'Error loading weather data';
                console.error(error);
            });
    });
});
