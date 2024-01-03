import React, { useState } from 'react'
import Book from '../components/UI/Book';

export default function Books({ books: initialBook }) {
    const [books, setBook] = useState(initialBook);

    function filterBook(e) {
        const filter = e.target.value;
        if (filter === "LOW_TO_HIGH") {
            setBook(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
        }
        if (filter === "HIGH_TO_LOW") {
            setBook(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
        }
        if (filter === "RATING") {
            setBook(books.slice().sort((a, b) => (b.rating - a.rating)));
        }
    }
    return (
        <div id="books__body">
            <main id="book__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="book__title books__header--tile">
                                    All Books
                                </h2>
                                <select id="filter" defaultValue="Default" onChange={filterBook}>
                                    <option value="Default" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, Hight to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {
                                    books.map((book) =>
                                        <Book book={book} key={book.id} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
