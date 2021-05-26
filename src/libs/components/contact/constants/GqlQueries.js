import { gql } from 'apollo-boost'

export const SEND_MESSAGE = gql`
    mutation($content: String!, $email: String!){
        sendMessage(content: $content,email: $email)
    }
`