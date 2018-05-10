export function selectBook(book) {
    // console.log('a book has been selected: ', book.title);

    // selectBook is a ActionCreator, it needs to return an action,
    // an object with a type proprty
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
