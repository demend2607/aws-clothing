import CategoryItem from '../directory-Item/DirectoryItem.component';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ categories }) => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
