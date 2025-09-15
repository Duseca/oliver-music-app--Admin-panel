import { useState } from "react";
import Header from "../layouts/partials/header";
import GenreView from "../components/GenreView";

export default function Genres() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [addingItem, setAddingItem] = useState(false);

  // Mock genres with sub-genres
  const [genres, setGenres] = useState([
    {
      id: 1,
      name: "Rock",
      subGenres: ["Alternative Rock", "Arena Rock", "Pop Rock"],
      description: "Classic rock genre",
      createdAt: "15 Sept 2025",
    },
    {
      id: 2,
      name: "Pop",
      subGenres: ["Indie Pop", "Future Pop", "Dance-Pop"],
      description: "Popular mainstream music",
      createdAt: "12 Sept 2025",
    },
    {
      id: 3,
      name: "Rock",
      subGenres: ["Alternative Rock", "Arena Rock", "Pop Rock"],
      description: "Classic rock genre",
      createdAt: "15 Sept 2025",
    },
    {
      id: 4,
      name: "Pop",
      subGenres: ["Indie Pop", "Future Pop", "Dance-Pop"],
      description: "Popular mainstream music",
      createdAt: "12 Sept 2025",
    },
  ]);

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handlePreview = (genre) => {
    setSelectedGenre(genre);
    setIsEditing(false);
    setAddingItem(false);
    setIsOpen(true);
  };

  const handleEdit = (genre) => {
    setSelectedGenre(genre);
    setIsEditing(true);
    setAddingItem(false);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setSelectedGenre(null);
    setIsEditing(false);
    setAddingItem(true);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("Delete Genre?")) {
      setGenres(genres.filter((g) => g.id !== id));
    }
  };

  const handleSave = (genre) => {
    if (addingItem) {
      setGenres([...genres, { ...genre, id: Date.now(), createdAt: new Date().toLocaleDateString() }]);
    } else if (isEditing) {
      setGenres(genres.map((g) => (g.id === genre.id ? genre : g)));
    }
  };

  return (
    <div>
      <Header header={"Manage Genres"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2">
            <div className="max-w-xs w-full">
              <input
                type="search"
                className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-150 focus:border-gray-150"
                placeholder="Search genres..."
                required
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <button
                className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-150 text-white"
                onClick={handleAdd}
              >
                Add Genre
              </button>
            </div>
          </div>

          <div className="my-3">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th className="px-6 py-3">Genre Name</th>
                    <th className="px-6 py-3">Sub-Genres</th>
                    <th className="px-6 py-3">Created Date</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {genres.map((genre) => (
                    <tr key={genre.id} className="bg-white border-b hover:bg-gray-150/30">
                      <td className="px-6 py-4 font-semibold text-gray-800">{genre.name}</td>
                      <td className="px-6 py-4">{genre.subGenres.join(", ")}</td>
                      <td className="px-6 py-4">{genre.createdAt}</td>
                      <td className="py-3 space-x-2">
                        <button onClick={() => handlePreview(genre)} className="font-medium text-gray-150 bg-gray-150 px-3 py-0.5 rounded-md bg-opacity-10">View</button>
                        <button onClick={() => handleEdit(genre)} className="font-medium text-green-500 bg-green-500 px-3 py-0.5 rounded-md hover:text-green-500 bg-opacity-10">Edit</button>
                        <button onClick={() => handleDelete(genre.id)} className="font-medium text-red-500 bg-red-500 px-3 py-0.5 rounded-md hover:text-red-400 bg-opacity-10">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <GenreView
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isEditing={isEditing}
          addingItem={addingItem}
          genre={selectedGenre}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
