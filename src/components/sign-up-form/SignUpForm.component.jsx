import { useState } from 'react';

import {
	createAuthUserWithEmalAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/FormInput.component';
import './signUpForm.styles.scss';
import Button from '../button/Button.component';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	console.log(formFields);

	const resetFormFoelds = () => setFormFields(defaultFormFields);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('password do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmalAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			}
			console.log('error xz', error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h1>Don't have an account?</h1>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					required
					label="displayName"
					type="text"
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
				<FormInput required label="email" type="email" onChange={handleChange} name="email" value={email} />
				<FormInput
					required
					label="password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<FormInput
					required
					label="confirmPassword"
					type="password"
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;