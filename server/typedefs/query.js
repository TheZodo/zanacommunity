const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    user: User
    isPasswordResetValid(token: String): Boolean
    isLoggedIn:Boolean


  }
`;

