import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from './categories-preview/CategoriesPreview.component';
import Category from './category/Category.component';

import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments('categories');
			dispatch(setCategories(categoriesArray));
			// dispatch(setCategoriesMap(categoryMap));
		};
		getCategoriesMap();
	}, []);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
