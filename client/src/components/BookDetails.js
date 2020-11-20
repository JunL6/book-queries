import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK_DETAIL } from "../queries/queries";

function BookDetails(props) {
	const { loading, error, data } = useQuery(GET_BOOK_DETAIL, {
		variables: { id: props.selectedId },
	});

	function displayBookDetails() {
		if (!data) return <div>Choose a book to see details</div>;
		const { book } = data;
		if (book) {
			console.log(book);
			return (
				<div>
					<h3>Book: {book.name}</h3>
					<p>Author: {book.author.name}</p>
					<p>other books from this author: </p>
					<ul>
						{book.author.books.length > 1 ? (
							book.author.books
								.filter((book) => book.id != props.selectedId)
								.map((book) => <li key={book.id}>{book.name}</li>)
						) : (
							<div>none</div>
						)}
					</ul>
				</div>
			);
		}
	}

	if (loading) return <div>loading book details...</div>;
	return <div>{displayBookDetails()}</div>;
}

export default BookDetails;
