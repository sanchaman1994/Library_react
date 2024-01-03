import React from 'react'
import { books } from "../data";
import Book from "./UI/Book"

export default function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2> Discont <span className='purple'>Books</span></h2>
          </div>
          <div className="books">
            {
              books.filter((book) => book.salePrice === null)
                .slice(0, 4)
                .map(book => <Book book={book} key={book.id} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}
