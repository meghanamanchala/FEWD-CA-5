// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Book.css';

// eslint-disable-next-line react/prop-types
function Books({ searchQuery }) {
  const [data, setData] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://reactnd-books-api.udacity.com/books',
          {
            headers: { Authorization: 'whatever-you-want' },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log('Error while Fetching data', error);
      }
    };
    fetchData();
  }, []);
console.log(filteredBooks)
  useEffect(() => {
    if (data) {
      const filtered = data.books.filter((book) =>
        // eslint-disable-next-line react/prop-types
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [data, searchQuery]);

  return (
    <div className="Books">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((el, i) => (
          <div className="book-container" key={i}>
            <img
              className="bookimage"
              src={el.imageLinks.thumbnail}
              alt="bookImage"
            />
            <p className="booktitle">{el.title}</p>
            <div className="flex gap-3 items-center">
              <p>{el.averageRating ? el.averageRating : '3.3'}⭐</p>
              <p className="free">Free</p>
            </div>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default Books;
