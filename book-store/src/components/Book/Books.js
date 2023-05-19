// import React, { useEffect, useState } from 'react'
// import Book from './Book'
// import axios from 'axios';
// import "./Book.css"
// const URL = "http://localhost:5000/books";

// const fetchHandler = async () => {
//     return await axios.get(URL).then((res) => res.data)
// };

// const Books = () => {
//     const [books, setBooks] = useState();
//     useEffect(() => {
//         fetchHandler().then((data) => setBooks(data.books));
//     }, []);
//     console.log(books);
//     return (
//         <div>
//             <ul>
//                 {books &&
//                     books.map((book, i) => {
//                         return (
//                             <li key={i}>
//                                 <Book book={book} />
//                             </li>
//                         );
//                     })}
//             </ul>
//         </div>
//     );
// };

// export default Books;


import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from 'axios';
import './Book.css';

const URL = 'http://localhost:5000/books';
const BOOKS_PER_PAGE = 20;

const fetchBooks = async () => {
  const response = await axios.get(URL);
  return response.data.books;
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const allBooks = await fetchBooks();
      setBooks(allBooks);
      setTotalPages(Math.ceil(allBooks.length / BOOKS_PER_PAGE));
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const endIndex = startIndex + BOOKS_PER_PAGE;
  const displayedBooks = books.slice(startIndex, endIndex);

  return (
    <div>
      <ul>
        {displayedBooks.map((book, i) => (
          <li key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Books;
