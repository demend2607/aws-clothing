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
				<Route index element={<Home />}></Route>
				<Route path="shop" element={<Shop />}></Route>
				<Route path="contacts" element={<Contacts />}></Route>
				<Route path="auth" element={<Authentication />}></Route>
				<Route path="checkout" element={<Checkout />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
