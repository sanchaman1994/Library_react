// src/App.js
import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBars,
	faShoppingCart,
	faTimes,
	faBolt,
	faBookOpen,
	faTags,
	faStar,
	faStarHalfAlt,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

library.add(
	faBars,
	faShoppingCart,
	faTimes,
	faTags,
	faBookOpen,
	faBolt,
	faStar,
	faStarHalfAlt,
	faArrowLeft
);

function App() {
	const [cart, setCart] = useState([]);

	function numberOfItems() {
		let counter = 0;
		cart.forEach((item) => {
			counter += item.quantity;
		});
		return counter;
	}

	function removeItem(item) {
		setCart(cart.filter((book) => book.id !== item.id));
	}

	function addToCart(book) {
		setCart([...cart, { ...book, quantity: 1 }]);
	}

	function changeQuantity(book, quantity) {
		setCart(
			cart.map((item) =>
				item.id === book.id
					? {
							...item,
							quantity: +quantity,
					  }
					: item
			)
		);
		// console.log(book, quantity);
	}

	return (
		<Router>
			<div className="App">
				<Nav numberOfItems={numberOfItems()} />
				<Route path="/" exact component={Home} />
				<Route path="/books" exact render={() => <Books books={books} />} />
				<Route
					path="/books/:id"
					render={() => (
						<BookInfo books={books} addToCart={addToCart} cart={cart} />
					)}
				/>
				<Route
					path="/cart"
					render={() => (
						<Cart
							cart={cart}
							changeQuantity={changeQuantity}
							removeItem={removeItem}
						/>
					)}
				/>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
