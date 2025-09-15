import React, { useState } from 'react'
import Header from '../layouts/partials/header'
import { Link } from 'react-router-dom'
import FaqModal from '../components/FaqModal'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Faqs() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleEditClick = (faq) => {
    setSelectedFaq(faq);
    setIsModalOpen(true);
  };

  const handleAddNewFaq = () => {
    setSelectedFaq(null);
    setIsModalOpen(true);
  };


  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Delete FAQ',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mr-4',
        cancelButton: 'bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300',
      },
      buttonsStyling: false,
    });

    if (result.isConfirmed) {
      try {
        console.log("faq deleted successfully..")
      } catch (err) {
        console.error('Error deleting deal:', err);
      }
    }
  };

  return (
    <div>
      <Header header={"Manage FAQs"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-4 rounded-lg shadow-sm mb-6">
            <div className="max-w-xs w-full">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-gray-150 focus:border-gray-150"
                  placeholder="Search faqs..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <button className="px-5 py-2 border text-xs bg-gray-150 text-white rounded-md font-medium" onClick={handleAddNewFaq}>Add FAQ</button>

              <button className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-150 text-white hover:opacity-90">
                Export CSV
              </button>
              {/* <Filterdropdown /> */}
            </div>
          </div>
          <div className="my-3">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      answer
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((x, i) => (
                    <tr className="bg-white border-b hover:bg-gray-150/30">
                      <td className="px-6 py-4">
                        What is Property Sharing?
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        Property Sharing is a simple, low-stress way to keep everyone in your life up to date, and a way to stay up to date with  everyone in your life!
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        08 March 2025 - 2:30 PM
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        {/* <button className="font-medium text-gray-150 bg-gray-150 px-3 py-0.5 rounded-md hover:text-gray-250 bg-opacity-10">view</button> */}
                        <button onClick={handleEditClick} className="font-medium text-green-500 bg-green-500 px-3 py-0.5 rounded-md hover:text-green-500 bg-opacity-10">Edit</button>
                        <button onClick={handleDelete} className="font-medium text-red-500 bg-red-500 px-3 py-0.5 rounded-md hover:text-red-500 bg-opacity-10">Delete</button>
                        {/* <a href="#" className="font-medium text-gray-250 hover:text-gray-150 hover:underline">Block</a> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <FaqModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          faq={selectedFaq}
        />
      </div>
    </div>
  )
}
