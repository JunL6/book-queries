const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql;

//dummy data 
const books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: 1},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: 2},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: 3},
  {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: 2},
  {name: 'The colour of Magic', genre: 'Fantasy', id: '5', authorId: 3},
  {name: 'The Light Fantastic', genre: 'Fantasy', id:'6', authorId: 3}
]

const authors = [
  {name: 'Patrick Rothfuss', age: 44, id: 1},
  {name: 'Brandon Sanderson', age: 42, id: 2},
  { name: 'Terry Pratchett', age: 66, id: 3}
]

const BookType = new GraphQLObjectType({
  name: 'book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    year: {type: graphql.GraphQLScalarType},
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // console.log(parent);
        return authors.find(elem => elem.id == parent.authorId)
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // console.log(parent);
        return books.filter(elem => elem.authorId == parent.id)
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // code to get data from db/other source
        return books.find(elem => elem.id == args.id);
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // console.log(args);
        return authors.find(elem => elem.id == args.id)
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})






