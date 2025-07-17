
import { useDispatch } from "react-redux";
import { addNewBook } from "./bookSlice"; 
import AddBookForm from "./AddBookForm";
import { Link } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();

  function handleAddBook(newBook) {
    dispatch(addNewBook(newBook)); 
  }

  return (
    <div className="p-6">
       <Link to="/BrowseBooks">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition">
          Browse All Books
        </button>
      </Link>
      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default AddBook;
