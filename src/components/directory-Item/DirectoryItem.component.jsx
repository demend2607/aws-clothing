import { Link } from 'react-router-dom';
import './directoryItem.styles.scss';

const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<Link to={`shop/${title}`} className="directory-item-container">
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="directory-body">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</Link>
	);
};

export default DirectoryItem;
