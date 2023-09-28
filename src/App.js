import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';
import Contacts from './routes/contacts/Contacts.componetn';
import Authentication from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation.component';
import Checkout from './components/checkout/Checkout.component';

const App = () => {
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
