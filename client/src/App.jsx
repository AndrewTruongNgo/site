import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter basename="https://andrewtruongngo.github.io/">
				<div>
					<div>Hello Andrew</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
