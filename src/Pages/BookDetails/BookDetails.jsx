import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);

  const { id } = useParams();
  const bookId = parseInt(id);
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  // const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);

  return (
    <div className="flex justify-center items-center mt-16  gap-16 ">
      <div>
        <img className="w-[425px] h-[525px] rounded-2xl" src={image} alt="" />
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-4xl text-[#131313]">{bookName}</h3>
        <p className="font-medium text-[#131313B3]">By : {author}</p>
        <h3>{category}</h3>
        <div className="w-[690px] text-gray-400">
          <span className="font-bold text-black">Review :</span>
          {review}
        </div>
        <div className="flex justify-start gap-8 items-center">
          <span className="font-bold text-black">Tag</span>
          {tags.map((tag) => (
            <span>
              <button className="btn border-none bg-[#f3f3f3] text-[#23BE0A] rounded-lg">
                #{tag}
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-16 ">
          <div className="space-y-3 text-gray-500 font-medium">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="space-y-3 font-bold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex justify-baseline gap-10">
          <button className="btn bg-[#c3bfbf4d]  rounded-lg px-7 py-5">
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-white rounded-lg px-7 py-5">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
