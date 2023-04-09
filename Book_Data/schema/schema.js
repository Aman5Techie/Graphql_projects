const graphql = require("graphql")
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql
const Book = require("../model/book")
const Author = require("../model/author")
// const {makeExecutableSchema} = require("graphql-tools")
// const {books,authors,Ubooks} = require("./dummydata")
const _ = require("lodash")
const author = require("../model/author")
// Gives book with an id and also give thire author name
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        // id:{type:GraphQLString},
        id: { type: GraphQLID },
        name: { type: (GraphQLString) },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parents, args) {
                console.log(parents);
                // return _.find(Uauthors,{id:parents.authorId})
                Author.findById(parents.authorid)
            }

        }
    })

})

// Give author info with id and also give their books list
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        // id:{type:GraphQLString},
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        book: {
            type: new GraphQLList(BookType),
            resolve(parents, args) {
                console.log(parents);
                //    return _.filter(Ubooks,{authorId:parents.id})
                return Book.find({ authorid: parents.id })
            }
        }
    })

})

// Just a rootqurey where our query begins

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLInt },
            },
            resolve(parents, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save()
            }
        },
        addBooks: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorid: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parents, args) {
                let booke = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorid: args.authorid
                });
                return booke.save();
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // Book with id  
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parents, args) {
                // Code to get data from db
                // return _.find(Ubooks,{id : args.id});
                return Book.findById(args.id)
            }
        },

        Author_by_name: {
            type: AuthorType,
            args: { name: { type: GraphQLString } },
            resolve(parents, args) {
                console.log(args);

                // return Author.find({name:args.name})
                return Author.findOne({ name: args.name })
            }
        },
        // auther with id 
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parents, args) {
                // Code to get data from db
                // return _.find(authors,{id : args.id});
                return Author.findById(args.id)
            }
        },
        // Whole Books list
        books: {
            type: new GraphQLList(BookType),
            resolve(parents, args) {
                // return books
                return Book.find()
            }

        },

        // Whole author list
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parents, args) {
                // return authors
                return Author.find()
            }

        }
    }
})

// const schema = makeExecutableSchema({RootQuery,typeDefs:BookType})
// const schema = new GraphQLSchema({RootQuery})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})

// module.exports = schema