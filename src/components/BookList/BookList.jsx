import { useState, useContext } from "react";
import { ReadingListContext } from "../../App";
import './BookList.css';

function BookList() {

    const { readingList, setReadingList } = useContext(ReadingListContext);

    const removeBook = (book) => {
        setReadingList(readingList.filter((b) => b.title !== book.title));
    }

    return (
        <>
            <div id="reading-list">
                {readingList.map((book) => (
                    <div className="book" key={readingList.indexOf(book)}>
                        <div className="book-cover">
                            <img src={ '/' + book.coverPhotoURL } alt="image" />
                        </div>
                        <div className="book-info">
                            <div>
                                <p><span className="detail">Title: </span>{book.title}</p>
                                <p><span className="detail">Author: </span>{book.author}</p>
                                <p><span className="detail">Reading Level: </span>{book.readingLevel}</p>
                            </div>
                            <div className="button">
                                <img src="/assets/minus-button.png" alt="btn" onClick={() => removeBook(book)} />
                            </div>
                        </div>
                    </div> 
                ))}           
            </div>
            
        </>
    );
}

export default BookList;