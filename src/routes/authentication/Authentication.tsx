import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInForm from '../../components/sign-in-form/SignInForm.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
