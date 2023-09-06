import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<h1>Hello sign in</h1>
			<button onClick={logoogleUser}>Sign in with Google</button>
		</div>
	);
};

export default SignIn;
