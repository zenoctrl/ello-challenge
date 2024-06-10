import { useEffect, useState, useContext } from "react";
import { ReadingListContext } from "../../App";
import axios from "axios";
import './SearchBar.css';

function SearchBar({books}) {

    const [results, setResults] = useState([]);
    const { readingList, setReadingList } = useContext(ReadingListContext);
    const list = readingList;

    const searchBook = (event) => {
        const text = event.target.value.toLowerCase();
        if(text) {
            setResults(books.filter((book) => book.title.toLowerCase().includes(text)));
        } else {
            setResults([]);
        }
    };

    const addBookToReadingList = (book) => {
        list.push(book);
        setReadingList(list);
    };

    return (
        <>
            <div id="search">
                <img id="logo" src="/assets/ello.svg" alt="" />
                <h1>Reading List</h1>
                <input type="text" name="" id="" onKeyUp={searchBook.bind(this)}  placeholder='Seach book by title ...'/>
                <div id="search-result">
                    {results.map((book) => (
                        <div className="search-item" key={results.indexOf(book)}>
                            <div>
                                <img className="cover-image" src={ '/' + book.coverPhotoURL } alt="" />
                                {book.title}
                            </div>
                            <div className="buttons">
                                <button className="add-btn" onClick={() => addBookToReadingList(book)}>Add</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SearchBar;