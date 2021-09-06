import { gql } from '@apollo/client';

export const GetAllNotesByAuthor = gql(`
    query GetAllNotesByAuthor($id: ID!) {
    getAllNotesByAuthor(id: $id) {
        id  
        title
        text
        authorId
    }
  }
`);

export const GetAuthor = gql(`
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
        id  
        username
    }
  }
`);

export const GetNote = gql(`
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      text
      authorId
    }
  }
`);