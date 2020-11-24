import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList(props) {
	const { loading, error, data } = useQuery(GET_BOOKS);
	const [selectedId, setSelectedId] = useState("");

	if (loading) return <p>loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<div className="book-list">
			<ul>
				{data.books.map((book) => (
					<li key={book.id} onClick={(e) => setSelectedId(book.id)}>
						{book.name}
					</li>
				))}
			</ul>
			<BookDetails selectedId={selectedId} />
		</div>
	);
}

export default BookList;
