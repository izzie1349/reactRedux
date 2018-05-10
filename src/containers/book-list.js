import React, { Component } from 'react';
// the glue between react and redux
import { connect } from 'react-redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return(
            <li key={book.title} className="list-group-item">{book.title}</li>
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

// connect takes in a function and compoonent and produces a container!
export default connect(mapStateToProps)(BookList);
