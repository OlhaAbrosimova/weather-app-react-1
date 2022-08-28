import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div>
			<div className="App">
				<Weather />
			</div>
			<span className="MyGit">
				Open-sourced on{" "}
				<a
					href="https://github.com/OlhaAbrosimova/weather-app-react-1"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>{" "}
				by Olha Abrosimova
			</span>
		</div>
	);
}

export default App;
