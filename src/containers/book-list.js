import React, { Component } from 'react';
// the glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// function that action generated by action generator
// flows through all reducers
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return(
            <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
            </li>
        );
    });
}

    render() {
        // console.log(this.props.books)
        return (
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inisde bookList
    return {
        books: state.books
    };
}


// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selcBook is called, the result should be passed
    // to all our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}


// connect takes in a function and compoonent and produces a container!
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
