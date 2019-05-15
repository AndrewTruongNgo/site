import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<div>Hello Andrew</div>
				</div>
			</Router>
		);
	}
}

export default App;
