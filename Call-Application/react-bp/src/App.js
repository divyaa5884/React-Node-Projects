import './App.css';
import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ConnectContact from './components/ConnectContact';

class App extends Component {
    render() {
		return (
			<div> 
				<ConnectContact />
			</div>
		);
	}
};

export default App;
