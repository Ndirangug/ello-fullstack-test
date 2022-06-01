import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Page from "./components/PageView";
import PageView from "./components/PageView";
import TokenValue from "./components/TokenValue.tsx";

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
  const [page, setPage] = useState(0);
  const leftPage = page + 1;
  const rightPage = page + 2;

  const goToPrev = () => {
    if (page > 0) {
      setPage(page - 2);
    }
  };

  const goToNext = () => {
    if (page + 2 < data.book.pages.length) {
      setPage(page + 2);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="App">
      <TokenValue />
      <div id="pages">
        <PageView
          className="leftPage"
          pageNumber={leftPage}
          page={data.book.pages[page]}
        ></PageView>
        <PageView
          className="rightPage"
          pageNumber={rightPage}
          page={data.book.pages[page + 1]}
        ></PageView>
      </div>

      <div id="navigation">
        <button className="btn" onClick={goToPrev}>
          PREV
        </button>
        <button className="btn" onClick={goToNext}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default App;
