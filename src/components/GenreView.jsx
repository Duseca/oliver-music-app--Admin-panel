import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

export default function GenreView({ isOpen, setIsOpen, isEditing = false, addingItem = false, genre, onSave }) {
  const [name, setName] = useState("");
  const [subGenres, setSubGenres] = useState([""]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (addingItem) {
      setName("");
      setSubGenres([""]);
      setDescription("");
    } else if (genre) {
      setName(genre.name);
      setSubGenres(genre.subGenres || [""]);
      setDescription(genre.description);
    }
  }, [isEditing, addingItem, genre]);

  const closeModal = () => setIsOpen(false);

  const handleSave = () => {
    const updatedGenre = {
      ...genre,
      name,
      subGenres: subGenres.filter((s) => s.trim() !== ""),
      description,
    };
    onSave(updatedGenre);
    setIsOpen(false);
  };

  const handleSubGenreChange = (index, value) => {
    const updated = [...subGenres];
    updated[index] = value;
    setSubGenres(updated);
  };

  const addSubGenre = () => setSubGenres([...subGenres, ""]);
  const removeSubGenre = (index) => setSubGenres(subGenres.filter((_, i) => i !== index));

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-2xl text-center font-bold text-gray-800 mb-6">
                  {addingItem ? "➕ Add New Genre" : isEditing ? "✍️ Edit Genre" : "👁️ Genre Details"}
                </Dialog.Title>

                <div className="grid gap-4">
                  {/* Genre Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Genre Name</label>
                    {isEditing || addingItem ? (
                      <input value={name} onChange={(e) => setName(e.target.value)} className="input border rounded-md p-2 w-full border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-150 focus:border-gray-150" />
                    ) : <p className="text-gray-800">{name}</p>}
                  </div>

                  {/* Sub-genres */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Sub-Genres</label>
                    {isEditing || addingItem ? (
                      <div className="space-y-2">
                        {subGenres.map((sub, i) => (
                          <div key={i} className="flex gap-2">
                            <input
                              value={sub}
                              onChange={(e) => handleSubGenreChange(i, e.target.value)}
                              className="input border rounded-md p-2 w-full border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-150 focus:border-gray-150"
                              placeholder="Enter sub-genre"
                            />
                            {subGenres.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeSubGenre(i)}
                                className="text-red-500 font-bold"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        ))}
                        <button type="button" onClick={addSubGenre} className="text-blue-600 text-sm mt-2">
                          ➕ Add Sub-Genre
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-800">{subGenres.join(", ")}</p>
                    )}
                  </div>

                  {/* Description */}
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    {isEditing || addingItem ? (
                      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-md p-2 w-full border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-150 focus:border-gray-150" />
                    ) : <p className="text-gray-800">{description}</p>}
                  </div> */}
                </div>

                <div className="mt-8 space-y-2">
                  <button onClick={isEditing || addingItem ? handleSave : closeModal} className="w-full rounded-md bg-gray-150 text-white px-4 py-2 font-semibold transition hover:bg-gray-150">
                    {isEditing || addingItem ? "Save Genre" : "Close"}
                  </button>
                  {(isEditing || addingItem) && (
                    <button type="button" className="w-full text-sm text-gray-500 hover:underline" onClick={closeModal}>
                      Cancel
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
