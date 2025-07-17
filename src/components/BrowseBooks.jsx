import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BookDetail from "./BookDetail";
import booksData from "../utils/mockdata";

function BrowseBooks() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books on title or author
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {}}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          <FaSearch />
          Search
        </button>
      </div>

      {/* Show All or Filtered */}
      <BookDetail books={searchTerm ? filteredBooks : booksData} />
    </div>
  );
}

export default BrowseBooks;
