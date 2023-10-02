import { useState } from 'react';
import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './signInForm.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFoelds = () => setFormFields(defaultFormFields);

	//* Google handler
	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signInAuthUserWithEmailAndPassword(email, password);

			resetFormFoelds();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('user with this email not found');
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<h1>Already have an account?</h1>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput required label="Email" type="email" onChange={handleChange} name="email" value={email} />
				<FormInput
					required
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign in</Button>
					<Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
