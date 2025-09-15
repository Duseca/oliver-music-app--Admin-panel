import { Link } from 'react-router-dom';
import { EyeIcon, NoSymbolIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';

export default function Users() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Artist Mike",
      email: "mike@example.com",
      role: "Artist",
      status: "Active",
      joinDate: "2024-02-20"
    },
    {
      id: 3,
      name: "Spam User",
      email: "spam@example.com",
      role: "User",
      status: "Suspended",
      joinDate: "2024-03-01"
    }
  ];

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div>
      <Header header={"Manage User"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          {/* Search Bar */}
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
              {/* <button className="px-5 py-2 border text-xs bg-gray-150 text-white rounded-md font-medium" onClick={handleAddNewFaq}>Add FAQ</button> */}

              <button className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-150 text-white hover:opacity-90">
                Export CSV
              </button>
              {/* <Filterdropdown /> */}
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{user.joinDate}</td>
                    <td className="px-6 py-4 text-sm font-medium space-x-2">
                      <Link to={`/users/${user.id}`} className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-5 h-5 inline" />
                      </Link>
                      <button className="text-red-600 hover:text-red-900">
                        <NoSymbolIcon className="w-5 h-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}