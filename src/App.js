import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';
import Contacts from './routes/contacts/Contacts.componetn';
import Authentication from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation.component';
import Checkout from './components/checkout/Checkout.component';

import { checkUserSession } from './store/user/user.action';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
		dispatch(checkUserSession());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="contacts" element={<Contacts />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
