import { gql } from '@apollo/client';

export const GetAllNotesByAuthorId = gql(`
    query GetAllNotesByAuthorId($id: ID!) {
    getAllNotesByAuthor(id: $id) {
        id  
        title
        text
        authorId
    }
  }
`);
