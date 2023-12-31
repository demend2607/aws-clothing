import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';

import { SignInContainer, ButtonsContainer } from './signInForm.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFoelds = () => setFormFields(defaultFormFields);

	//* Google handler
	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			dispatch(emailSignInStart(email, password));
			resetFormFoelds();
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert('incorrect password for email');
					break;
				case AuthErrorCodes.USER_DELETED:
					alert('user with this email not found');
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
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
				<ButtonsContainer>
					<Button type="submit">Sign in</Button>
					<Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
