import axios from 'axios';
import {
	FETCH_USER,
	EDIT_PRODUCT,
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	DELETE_PRODUCT,
} from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitProduct = (values, file, history) => async (dispatch) => {
	const res = await axios.post('/api/product', {
		...values,
	});

	dispatch({ type: FETCH_PRODUCT, payload: res.data });
	history.push('/products');
};

export const fetchProducts = () => async (dispatch) => {
	const res = await axios.get('/api/products');

	dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (id) => async (dispatch) => {
	const res = await axios.get(`/api/product/${id}`);

	dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const editProduct = (productId, formValues, history) => async (
	dispatch
) => {
	const res = await axios.put(`/api/product/${productId}`, formValues);
	dispatch({
		type: EDIT_PRODUCT,
		payload: res.data,
	});
	history.push('/products');
};

export const deleteProduct = (productId, history) => async (dispatch) => {
	await axios.delete(`/api/product/${productId}`);
	dispatch({
		type: DELETE_PRODUCT,
		payload: productId,
	});
	history.push('/products');
};
