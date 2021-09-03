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
      title
      text
      authorId
    }
  }
`);

export const AddNote = gql(`
  mutation AddNote($title: String!, $text: String!, $authorId: String!) {
    addNote(note: { title: $title, text: $text}, authorId: $authorId)
  }
`);