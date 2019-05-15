import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter basename="/site">
				<div>
					<div>Hello Andrew</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
