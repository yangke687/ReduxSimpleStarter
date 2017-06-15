import {
	FETCH_POSTS
} from '../actions';

import _ from 'lodash';

export default function(state = {}, action) {
	console.log(action);
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
			break;
		default:
			return state;
	}
}