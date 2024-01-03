// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useRef } from 'react'
import Rating from './Rating'
import Price from './Price'
import { Link } from 'react-router-dom'



export default function Book({ book }) {
    const [img, setImg] = useState();

    const useReff = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            // if (useReff.current) {
            setImg(image);
            // }
        };
        return () => {
            // Cleanup function when the component unmounts
            useReff.current = false;
        };
    });


    return (

        <div className="book">
            {img ? (

                <>

                    <Link to={`/books/${book.id}`}>
                        <figure className="book__img--wrapper">
                            <img className="book__img" src={img.src} alt="" />
                        </figure>
                    </Link>
                    <div className="book__title">
                        <Link to={`/books/${book.id}`} className="book__title--link">
                            {book.title}
                        </Link>
                    </div>
                    <Rating rating={book.rating} />
                    <Price
                        originalPrice={book.originalPrice}
                        salePrice={book.salePrice}
                    />


                </>
            ) : (
                <>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                </>
            )
            }
        </div >
    )
}
