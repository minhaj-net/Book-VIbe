import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    image,
    bookName,
    bookId,
    author,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card  w-96 shadow-sm mb-8 ">
          <figure className="bg-[#f3f3f3] py-4 rounded-2xl mx-8">
            <img
              src={image}
              alt="Shoes"
              className="h-[166px]  object-cover rounded-xl "
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between ml-3 items-center">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn bg-[#f3f3f3] border-none rounded-3xl text-[#23BE0A] font-medium text-lg"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}

              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <h2 className="font-bold text-gray-500">Published by : {author}</h2>
            <div className="border-t border-gray-300 border-dashed"></div>
            <div className="card-actions justify-between">
              <h3 className="text-xl font-medium ">{category}</h3>
              <div className="flex justify-between gap-3 items-center">
                <h3 className="text-xl font-bold">{rating}</h3>
                <span>
                  <Star></Star>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
