import React from "react";
import "./SearchEngine.css";

export default function SearchEnginej() {
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
