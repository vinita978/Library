// Home.jsx
import booksData from "../utils/mockdata"; 
import BookDetail from "./BookDetail";


function Home() {
  const featuredBooks = booksData.slice(0, 6); 

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Welcome to the Online Library
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore a world of knowledge!
      </p>
      <BookDetail books={featuredBooks} /> {}
    </div>
  );
}

export default Home;
