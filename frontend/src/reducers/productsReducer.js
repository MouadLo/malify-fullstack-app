import _ from 'lodash';
import mapKeys from 'lodash/mapKeys';
import {
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	EDIT_PRODUCT,
	DELETE_PRODUCT,
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_PRODUCT:
			const blog = action.payload;
			return { ...state, [blog._id]: blog };
		case FETCH_PRODUCTS:
			return { ...state, ...mapKeys(action.payload, '_id') };
		case EDIT_PRODUCT:
			return { ...state, [action.payload._id]: action.payload };
		case DELETE_PRODUCT:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}
