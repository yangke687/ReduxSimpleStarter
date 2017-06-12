import React, {
	Component
}
from 'react';
import {
	connect
} from 'react-redux';

import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		//console.log(cityData);
		const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// city lat,lng
		const {
			lon,
			lat
		} = cityData.city.coord;
		return (
			<tr key={cityData.city.name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
					{cityData.city.name}
				</td>
				<td>
					<Chart color='red' height={120} width={180} data={temps} units='℃' />
				</td>
				<td>
					<Chart color='green' height={120} width={180} data={pressures} units='hPa' />
				</td>
				<td>
					<Chart color='blue' height={120} width={180} data={humidities} units='%' />
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
						<th>Temperature (℃)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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