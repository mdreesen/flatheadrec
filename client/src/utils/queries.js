// importing graphql
import gql from 'graphql-tag';

// querying single user
export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
        _id
        username
    }
}
`;

export const QUERY_USERS = gql `
  query {
    users {
      _id
      username
      email
    }
  }
`;

// This is a different query
// We are not passing variables to this query
// we can just name this query and graphql will handle it
export const QUERY_ME = gql `
{
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_PLACES = gql `
  query {
    places {
      title
      location
      type
      category
      website
    }
  }
`;