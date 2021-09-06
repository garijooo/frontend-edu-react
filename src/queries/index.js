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

export const GetAllNotes = gql(`
  query GetAllNotes {
    getAllNotes {
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

export const GetNotesAmount = gql(`
  query GetNotesAmount {
    getNotesAmount
  }
`);

export const AddNote = gql(`
  mutation AddNote($note: NoteInput!, $authorId: String!) {
    addNote(note: $note, authorId: $authorId)
  }
`);

export const EditNote = gql(`
  mutation EditNote($note: NoteInput!) {
    editNote(note: $note)
  }
`);