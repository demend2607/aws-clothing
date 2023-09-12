import { useState } from 'react';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './signInForm.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	console.log(formFields);

	//* Google handler
	const signInWithGoogle = async () => {
		try {
			const { user } = await signInWithGooglePopup();
			await createUserDocumentFromAuth(user);
		} catch (error) {
			if (error.code === 'auth/popup-closed-by-user') {
				window.location.reload();
			}
		}
	};

	const resetFormFoelds = () => setFormFields(defaultFormFields);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
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
					<Button type="button" buttonType="google" onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
