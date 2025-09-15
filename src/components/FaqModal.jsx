import React, { useEffect, useRef, useState } from "react";

const FaqModal = ({ isOpen, faq, onClose }) => {
  const modalRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleChange = (e) => {};

  const handleFeatureChange = (index, value) => {};

  const handleSubmit = () => {
    onClose()
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
      <div
        ref={modalRef}
        className="mx-4 bg-white p-6 rounded-lg shadow-lg w-2/6 max-h-[90vh] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <h2 className="text-xl font-bold mb-4">
          {faq ? "Edit FAQ" : "Add New FAQ"}
        </h2>
        <label className="block mb-2 text-sm font-medium">Question</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-150 focus:border-gray-150" 
          placeholder="Enter question"
        />

        <label className="block mb-2 text-sm font-medium">Answer</label>
        <textarea
          type="number"
          name="description"
          onChange={handleChange}
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-150 focus:border-gray-150"
          placeholder="Enter answer"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gray-150 text-white px-4 py-2 rounded-md"
          >
            Save FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqModal;