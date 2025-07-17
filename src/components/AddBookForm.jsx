import { useState } from "react";

function AddBookForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    published: "",
    description: "",
    rating: "",
    coverImage: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(formData); // pass new book to parent
    setFormData({     // reset form
      title: "",
      author: "",
      genre: "",
      published: "",
      description: "",
      rating: "",
      coverImage: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow space-y-4">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" required />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full border p-2 rounded" required />
      <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" className="w-full border p-2 rounded" />
      <input name="published" value={formData.published} onChange={handleChange} placeholder="Published Year" className="w-full border p-2 rounded" />
      <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="w-full border p-2 rounded" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" />
      <input name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="Cover Image URL" className="w-full border p-2 rounded" />
      
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Book</button>
    </form>
  );
}

export default AddBookForm;
