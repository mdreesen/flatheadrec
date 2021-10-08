// import the gql tagged template functon
const { gql } = require('apollo-server-express');

// NOTES
// GraphQL uses Queries and Mutations
// Queries is getting data
// Mutations is creating, updating, deleting

// creating typeDefs
const typeDefs = gql `
type Query {
    helloWorld: String

    me: User

    users: [User]
    user(email: String!): User

    places: [Place]
    place(name: String!): Place
}

type Auth {
    token: ID!
    user: User
    admin: Admin
}

type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Place {
    _id: ID
    name: String
    createdAt: String
    location: String
    type: String
    category: String
    website: String
  }

  type Admin {
    _id: ID
    username: String
    email: String
    password: String
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    userLogin(email: String!, password: String!): Auth

    addAdmin(username: String!, email: String!, password: String!): Auth
    adminLogin(email: String!, password: String!): Auth

    addPlace(name: String, location: String, type: String, category: String, website: String): Place
}
`;

// export the typeDefs
module.exports = typeDefs;