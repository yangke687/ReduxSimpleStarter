import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyC4Iqc1wb5oW_8CcTlqBlV-w4wTtB2-11E";

// create a new component
// this component should produce some HTML
const App = () => {
	return (<div>Hi</div>);
}


// take this component's generated HTML 
// and put it on page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));