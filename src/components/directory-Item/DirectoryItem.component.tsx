import { FC } from 'react';

import { DirectoryBody, DirectoryImage, DirectoryItemContaner } from './directoryItem.styles';
import { DirectoryCategory } from '../directory/Directory.component';

export type DirectoryItemProps = {
	category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<DirectoryItemContaner to={`shop/${title}`}>
			<DirectoryImage imageUrl={imageUrl} />
			<DirectoryBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryBody>
		</DirectoryItemContaner>
	);
};

export default DirectoryItem;
