import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
	query {
		authors {
			name
			id
		}
	}
`;

export const GET_BOOKS = gql`
	query GetBooks {
		books {
			name
			genre
			id
		}
	}
`;

export const ADD_BOOK_MUTATION = gql`
	mutation($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			id
			name
		}
	}
`;

export const GET_BOOK_DETAIL = gql`
	query GetBook($id: ID!) {
		book(id: $id) {
			name
			genre
			id
			author {
				name
				books {
					id
					name
					genre
				}
			}
		}
	}
`;
