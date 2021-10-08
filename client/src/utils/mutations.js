import gql from 'graphql-tag';

// -=- USER MUTATIONS -=-
export const LOGIN_USER = gql`
mutation userLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const ADD_USER = gql`
mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    addAdmin(username: $username, email: $email, password: $password) {
      token
      admin {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_ADMIN = gql`
  mutation adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      token
      admin {
        _id
        email
      }
    }
  }
`;

export const ADD_PLACE = gql`
  mutation($title: String!, $location: String!, $type: String!, $category: String!, $website: String!) {
    addPlace(title: $title, location: $location, type: $type, category: $category, website: $website) {
    _id
    title
    location
    type
    category
    website
    }
  }
`;
