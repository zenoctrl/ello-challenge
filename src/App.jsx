import { createContext, useState, useEffect } from 'react';
import axios from "axios";
import './App.css'

import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/BookList/BookList';

export const ReadingListContext = createContext();

const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);
  return(
    <>
      <ReadingListContext.Provider value={{ readingList, setReadingList }}>
        {children}
      </ReadingListContext.Provider>
    </>
  );
}

function App() {
  const [books, setBooks] = useState([]);

  const url = 'http://localhost:4000';
  const query = {
      query: `query Books { books { author coverPhotoURL readingLevel title } }`
  };

  useEffect(() => {
      axios.post(url, query)
      .then((res) => {
          setBooks(res.data.data.books);
      })
  });

  return (
    <>
      <main>
        <ReadingListProvider>
          <SearchBar books={books}></SearchBar>
          <BookList></BookList>
        </ReadingListProvider>
      </main>
    </>
  )
}

export default App
