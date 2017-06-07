import React from 'react';
import ReactDOM from 'react-dom';

// create a new component
// this component should produce some HTML
const App = () => {
	return (<div>Hi</div>);
}


// take this component's generated HTML 
// and put it on page (DOM)
ReactDOM.render(<App />,document.querySelector('.container'));