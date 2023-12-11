import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/Directory.component';

const Home = () => {
	return (
		<>
			<Directory />
			<Outlet />
		</>
	);
};

export default Home;
