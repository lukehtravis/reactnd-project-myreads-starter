import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
  static propTypes = {
    shelvesProp: PropTypes.array
  }

  render() {
    const shelvesProp = this.props
    return (
      {this.props.shelvesProp.map((shelf) => (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
              </li>
            </ol>
          </div>
        </div>
      ))}
    )
  }
}

export default Shelf
