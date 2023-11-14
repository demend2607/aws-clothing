import { useState } from 'react';

import { createContactCollection } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';

import { ContactFormContainer } from './contactForm.styles';

const defaultFormFields = {
	displayName: '',
	email: '',
	message: '',
};
const ContactForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, message } = formFields;

	const resetFormFoelds = () => setFormFields(defaultFormFields);

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			createContactCollection(formFields);
			resetFormFoelds();
		} catch (error) {
			console.log('error xz', error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<ContactFormContainer>
			<h1 className="contact-header">Contact us</h1>
			<p className="contact-preview">
				Feel free to contact us if you need any assistance, any help or another question.
			</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					required
					label="Name"
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
				/>
				<FormInput required label="Email" type="email" name="email" value={email} onChange={handleChange} />
				<FormInput
					required
					label="Message"
					type="textarea"
					name="message"
					value={message}
					onChange={handleChange}
				/>
				<Button type="submit">Send</Button>
			</form>
		</ContactFormContainer>
	);
};

export default ContactForm;
