import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import Button from '../../components/button/Button.component';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Hello sign in</h1>
			<Button buttonType="google" onClick={logGoogleUser}>
				Sign in with Google Popup
			</Button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
