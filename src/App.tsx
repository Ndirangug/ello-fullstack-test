import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOOK = gql`
  query fetchBook {
    book {
      author
      pages {
        content
        pageIndex
        tokens {
          position
          value
        }
      }
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(FETCH_BOOK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <div className="App"></div>;
}

export default App;
