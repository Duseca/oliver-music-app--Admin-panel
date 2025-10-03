import { Link } from 'react-router-dom';
import { EyeIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';
import { artists } from '../components/data';

export default function Artists() {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Featured': return 'bg-blue-100 text-blue-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <Header header={"Manage Artist"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-500">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Artists</p>
                  <p className="text-2xl font-semibold text-gray-900">2,156</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-500">
                  <CheckBadgeIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Verified</p>
                  <p className="text-2xl font-semibold text-gray-900">1,423</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-500">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Featured</p>
                  <p className="text-2xl font-semibold text-gray-900">87</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-yellow-500">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">New This Month</p>
                  <p className="text-2xl font-semibold text-gray-900">156</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-gray-150 focus:border-gray-150"
                  placeholder="Search Artist..."
                  required
                />
              </div>
              <div className='flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4'>

                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Featured</option>
                  <option>Suspended</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                  <option>All Genres</option>
                  <option>Electronic</option>
                  <option>Hip Hop</option>
                  <option>House</option>
                  <option>Pop</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                  <option>All Verification</option>
                  <option>Verified</option>
                  <option>Unverified</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Genre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fans</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tracks</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {artists.map((artist) => (
                  <tr key={artist.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 text-sm">🎤</span>
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900">{artist.name}</div>
                            {artist.verified && (
                              <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
                            )}
                            {artist.isFoundingArtist && (
                              <span className="inline-flex items-center" title="Founding Artist">
                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{artist.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{artist.genre}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{artist.fans.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{artist.tracks}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(artist.status)}`}>
                        {artist.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{artist.joinDate}</td>
                    <td className="px-6 py-4 text-sm font-medium space-x-2">
                      <Link to={`/artists/${artist.id}`} className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-5 h-5 inline" />
                      </Link>
                      {!artist.verified && (
                        <button className="text-green-600 hover:text-green-900" title="Verify Artist">
                          <CheckBadgeIcon className="w-5 h-5 inline" />
                        </button>
                      )}
                      <button className="text-yellow-600 hover:text-yellow-900" title="Feature Artist">
                        <StarIcon className="w-5 h-5 inline" />
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