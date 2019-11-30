import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from "./pages/shop/shop.comp";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.comp";
import Header from "./components/header/header.comp";
import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" component={SignInAndSignUpPage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route />
			</Switch>
		</div>
	);
} 

export default App;
