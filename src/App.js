import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';
import Contacts from './routes/contacts/Contacts.componetn';
import SignIn from './routes/signIn/SignIn.component';
import Navigation from './routes/navigation/Navigation.component';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path="shop" element={<Shop />}></Route>
				<Route path="contacts" element={<Contacts />}></Route>
				<Route path="sign-in" element={<SignIn />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
