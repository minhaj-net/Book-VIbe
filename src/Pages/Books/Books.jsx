import React, { Suspense, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [bookList, setBookList] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  // const booksPromise = fetch("/booksData.json").then((res) => res.json());

  return (
    <div>
      <h3 className="text-3xl mx-auto text-center font-bold">Books</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid text-center md:grid-cols-3">
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
