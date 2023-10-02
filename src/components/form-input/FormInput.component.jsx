import { FormInputLabel, Group, Input } from './formInput.styles';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				// className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
				<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
