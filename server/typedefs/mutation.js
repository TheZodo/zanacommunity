const { gql } = require("apollo-server-express");

//todo on reset password send email with confirmation code

module.exports = gql`
  type Mutation {
    register(user: UserInput): User
    login(user: UserInput): User
    changePassword(oldPassword: String,newPassword: String): User
    resetPassword(email: String):Int
    changeTokenPassword(token: String,password: String): User
    logout: Boolean 
  }
`;

