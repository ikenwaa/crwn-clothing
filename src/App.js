import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from './pages/shop/shop.comp';
import "./App.css";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route />
			</Switch>
		</div>
	);
}

export default App;
