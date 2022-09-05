const gql = require('apollo-server-express');

// need to define:
// query type as me: returning user type
// mutation type as login: accepting email password as parameters. returns an Auth type
// mutation cont
// addUser accepts a username, email and password as params, returning Auth type
// saveBook accepts a book author's array, description, title, bookId, image, and link as params. returns a User type
// hint for the saveBook is to look into making an input type to handle all of the params
// removeBook, accepts book's bookId as param, returning user type

// user type takes in _id, username, email, bookCount, savedbooks (which is an array of book type)

// book type takes in bookId (not _id, but books id returned from google books api), authors (array of strings), description, title, image, link

// auth type takes in token and user (referencing user type)
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: Int
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    
    type Auth {
        token: String
        user: User
    }
    
    type Query {
        
    }`






