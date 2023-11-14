import { FormInputLabel, Group, Input, TextArea } from './formInput.styles';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			{otherProps.type !== 'textarea' ? <Input {...otherProps} /> : <TextArea {...otherProps} />}
			{label && (
				// className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
				<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
