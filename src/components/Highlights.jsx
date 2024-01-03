import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './UI/Highlisht';


export default function Hightlights() {
    return (
        <section id='highlights'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className='purple'>Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            para="Get access to the book you purchasesd online instantly"
                        />
                        <Highlight icon={<FontAwesomeIcon icon="book-open" />}
                            title="10000+ Books"
                            para="Library has books in all your favourite categories."
                        />
                        <Highlight icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para="Get your hands on popular books for as little as $10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
