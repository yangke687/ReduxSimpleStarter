export default function(state = null, action) {
	// this state is not app state
	// just state for this reducer
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}