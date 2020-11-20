// import {useQuery,   gql} from '@apollo/client';
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
	// const {loading, error, data} = useQuery(GET_BOOKS);

	// if (loading) return <p>loading...</p>
	// if (error) return <p>Error</p>
	// console.log(data);
	// return (
	//   <ul>
	//     {data.books.map(book => (<li key={book.id}>{book.name}</li>))}
	//   </ul>
	// );

	return (
		<div>
			<h1>Book list</h1>
			<BookList />
			<AddBook />
		</div>
	);
}

export default App;
