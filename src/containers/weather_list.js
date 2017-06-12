import React, {
	Component
}
from 'react';
import {
	connect
} from 'react-redux';

import {
	Sparklines,
	SparklinesLine
} from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData) {
		//console.log(cityData);
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td>
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={180} data={pressures}>
						<SparklinesLine color="green" />
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={180} data={humidities}>
						<SparklinesLine color="blue" />
					</Sparklines>
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return {
		weather: state.weather
	};
}

export default connect(mapStateToProps)(WeatherList);