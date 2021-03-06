import React from "react";
import FormInput from "../form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = e => {
		const { value, name } = e.target;
		e.preventDefault();

		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						label="Email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						label="Password"
						handleChange={this.handleChange}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							SIGN IN With google{" "}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
