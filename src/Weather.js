import React from "react";
import SearchEngine from "./SearchEngine";
import "./Weather.css";
// import axios from "axios";

export default function Weather() {
	let weatherData = {
		city: "Kyiv",
		temperature: 27,
		date: "Tuesday, 16:21",
		description: "overcast clouds",
		wind: 7.8,
		humidity: 37,
		icon: "http://openweathermap.org/img/wn/04d@2x.png",
	};

	return (
		<div className="Weather">
			<button className="current-geo-btn">
				<strong>Current geolocation</strong>
			</button>

			<SearchEngine />

			<div className="row base-temp-block">
				<div className="col-6 city-flex">
					<h1>Kyiv</h1>
					<ul className="weather-metrics">
						<li>
							<span>{weatherData.date}</span>,
							<span> {weatherData.description}</span>
						</li>
						<li>
							Humidity: <span>{weatherData.humidity}</span>%
						</li>
						<li>
							Wind: <span>{weatherData.wind}</span>
							<span>m/s</span>
						</li>
					</ul>
				</div>
				<div className="col-6">
					<div className="weather-temperature">
						<span>
							<img
								src={weatherData.icon}
								alt={weatherData.description}
								className="base-emojies"
							/>
						</span>
						<span className="base-temperature">{weatherData.temperature}</span>
						<a className="units" href="/">
							°C
						</a>
						<span className="units"> | </span>
						<a className="units" href="/">
							°F
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
