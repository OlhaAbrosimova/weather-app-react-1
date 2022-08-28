import React from "react";
import "./SearchEngine.css";
// import axios from "axios";

export default function SearchEngine() {
	// const [city, setCity] = useState("");
	// const [weather, setWeather] = useState({});

	// function showWeather(response) {
	// 	setWeather({
	// 		temperature: response.data.main.temp,
	// 		description: response.data.weather[0].description,
	// 	});
	// }
	// function updateCity(event) {
	// 	setCity(event.target.value);
	// }
	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2e58143d5353df7726302c2856b0fb6&units=metric`;
	// 	axios.get(apiUrl).then(showWeather);
	// }

	return (
		<form className="SearchEngine">
			<div className="row">
				<div className="col-9">
					<input
						className="type-city-form"
						type="text"
						placeholder="Type a city..."
						autoComplete="off"
					/>
				</div>
				<div className="col-3">
					<input className="search-btn" type="submit" value="Search" />
				</div>
			</div>
		</form>
	);
}
