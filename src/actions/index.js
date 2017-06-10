export function selectBook(book) {
	// this is an action creator function
	// it needs to return an action object
	// an object with a type property
	console.log('a book has been selected:', book.title);
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}