import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInForm from '../../components/sign-in-form/SignInForm.component';

import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className="autentication-contaier">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
