// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// Import axios library for making HTTP requests
import axios from 'axios';
import './Book.css';

// eslint-disable-next-line react/prop-types
function Books({ searchQuery }) {
  const [data, setData] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // useEffect hook to fetch data from the API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://reactnd-books-api.udacity.com/books',
          {
            headers: { Authorization: 'whatever-you-want' },// Authorization header
          }
        );
        setData(response.data); // Set the fetched data to state
      } catch (error) {
        console.log('Error while Fetching data', error);
      }
    };
    fetchData();  // Call the fetchData function
  }, []);// Empty dependency array ensures this effect runs only once when the component mounts
console.log(filteredBooks);

  // useEffect hook to filter books based on search query
  useEffect(() => {
    if (data) {
      const filtered = data.books.filter((book) =>
              // Filter books whose title starts with the search query, case-insensitive
        // eslint-disable-next-line react/prop-types
        book.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered); // Set the filtered books to state
    }
  }, [data, searchQuery]); // Run this effect whenever data or searchQuery changes


  return (
    <div className="Books">
       {/* Render filtered books */}
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
        <p>No books found.</p> // Render if no books match the search query
      )}
    </div>
  );
}

export default Books;
