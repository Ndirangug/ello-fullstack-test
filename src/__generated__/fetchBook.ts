/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchBook
// ====================================================

export interface fetchBook_book_pages_tokens {
  __typename: "Token";
  position: (number | null)[];
  value: string;
}

export interface fetchBook_book_pages {
  __typename: "Page";
  content: string | null;
  pageIndex: number;
  tokens: fetchBook_book_pages_tokens[] | null;
}

export interface fetchBook_book {
  __typename: "Book";
  author: string | null;
  pages: fetchBook_book_pages[] | null;
  title: string | null;
}

export interface fetchBook {
  book: fetchBook_book;
}
