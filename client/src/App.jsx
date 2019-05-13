import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter basename="/">
				<div>Hello Andrew</div>
			</HashRouter>
		);
	}
}

export default App;
