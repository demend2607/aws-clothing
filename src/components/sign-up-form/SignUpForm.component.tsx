import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';

import { SignUpContainer } from './signUpForm.styles';
import { signUpStart } from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('password do not match');
			return;
		}
		try {
			dispatch(signUpStart(email, password, displayName));
			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			}
			console.log('error xz', error);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h1>Don't have an account?</h1>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					required
					label="Display Name"
					type="text"
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
				<FormInput required label="Email" type="email" onChange={handleChange} name="email" value={email} />
				<FormInput
					required
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<FormInput
					required
					label="Confirm Password"
					type="password"
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
