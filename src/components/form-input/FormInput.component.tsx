import { FC, InputHTMLAttributes } from 'react';
import { FormInputLabel, Group, Input } from './formInput.styles';

export type FormInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				// className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
				<FormInputLabel
					shrink={Boolean(
						otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length
					)}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
