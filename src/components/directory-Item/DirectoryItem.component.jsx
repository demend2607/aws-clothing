import { DirectoryBody, DirectoryImage, DirectoryItemContaner } from './directoryItem.styles';

const DirectoryItem = ({ category }) => {
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
