# Weather App

This Weather App allows users to retrieve real-time weather information for any city. The app displays the current temperature, weather conditions, and an appropriate weather icon based on the provided city name.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Files](#files)
- [API Key](#api-key)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Real-Time Weather Data**: Enter a city name to get current weather details.
- **Weather Icon**: Displays an icon representing the current weather condition.
- **Temperature in Celsius**: Shows the temperature in degrees Celsius.
- **Weather Description**: Provides a brief description of the current weather.

## Technologies Used

- **HTML5**: For the structure of the web page.
- **CSS3**: For styling, using custom stylesheets `style.css` and `btn.css`.
- **Bootstrap 4.5**: For responsive design and basic UI components.
- **JavaScript (ES6+)**: For dynamic content and API interaction.
- **OpenWeatherMap API**: To fetch real-time weather data.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd weather-app
    ```

3. **Open `index.html`**:
   - You can directly open the `index.html` file in your preferred web browser to run the app.

## Usage

1. Enter the name of the city you want to check the weather for in the input field.
2. Click the "Get Weather" button.
3. The app will display the weather information, including the temperature, a weather icon, and a description.

## Live Demo

You can see a live demo of the Weather App hosted at this link: [Weather App](https://suyash-weather-app-q9h8r.kinsta.page/).

## Files

- `index.html`: The main HTML file that structures the web page.
- `style.css`: Custom CSS for styling the app.
- `btn.css`: Additional styling for the buttons.
- `script.js`: JavaScript file that handles fetching and displaying weather data.

## API Key

The app uses the [OpenWeatherMap](https://openweathermap.org/api) API to fetch weather data. To use the app, you'll need to replace the placeholder API key in `script.js` with your own key:

```javascript
const apiKey = 'your-api-key-here';
