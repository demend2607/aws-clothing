import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from './categories-preview/CategoriesPreview.component';
import Category from './category/Category.component';

import { fetchCategoriesStartAsync } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesStartAsync());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
