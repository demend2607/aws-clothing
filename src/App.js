import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense, Fragment } from 'react';

// import Home from './routes/home/Home.component.tsx';
// import Shop from './routes/shop/Shop.component';
// import Contact from './routes/contact/Contact.component';
// import Authentication from './routes/authentication/Authentication';
// import Navigation from './routes/navigation/Navigation.component';
// import Checkout from './components/checkout/Checkout.component';
import Spinner from './components/spinner/Spinner.component';
import { GlobalStyle } from './global.styles';

import { checkUserSession, setCurrentUser } from './store/user/user.action';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

const Home = lazy(() => import('./routes/home/Home.component.tsx'));
const Authentication = lazy(() => import('./routes/authentication/Authentication'));
const Navigation = lazy(() => import('./routes/navigation/Navigation.component'));
const Checkout = lazy(() => import('./components/checkout/Checkout.component'));
const Shop = lazy(() => import('./routes/shop/Shop.component'));
const Contact = lazy(() => import('./routes/contact/Contact.component'));

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
		// eslint-disable-next-line no-unreachable
		dispatch(checkUserSession());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Suspense fallback={<Spinner />}>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="contact" element={<Contact />} />
					<Route path="auth" element={<Authentication />} />
					<Route path="checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
