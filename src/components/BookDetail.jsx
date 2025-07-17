// import Button from "./Button";
// import booksData from "../utils/mockdata";
// import Book from "Book"
import Book from "./Book"

function BookDetail({ books = [] }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {books.length > 0 ? (
          books.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={data.coverImage}
                alt={data.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-bold text-blue-800 mb-1">
                  Title: {data.title}
                </h1>
                <h3 className="text-md text-gray-700 mb-2">
                  Author: {data.author}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Description: {data.description}
                </p>
                <p className="text-sm text-yellow-700 font-semibold">
                  Rating: ⭐ {data.rating}
                </p>
                <a
                  href={<Book/>}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-md transition duration-200"
                >
                  View More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No books found.
          </p>
        )}
      </div>
    </>
  );
}

export default BookDetail;
