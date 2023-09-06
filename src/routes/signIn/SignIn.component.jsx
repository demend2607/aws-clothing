import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logoogleUser = async () => {
		const responce = await signInWithGooglePopup();
		console.log(responce);
	};
	return (
		<div>
			<h1>Hello sign in</h1>
			<button onClick={logoogleUser}>Sign in with Google</button>
		</div>
	);
};

export default SignIn;
