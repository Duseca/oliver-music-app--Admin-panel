import { Link } from 'react-router-dom';
import { EyeIcon, UserIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';
import { fans } from '../components/data';

export default function Fans() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Inactive': return 'bg-gray-100 text-gray-800';
            case 'Suspended': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getMembershipColor = (type) => {
        return type === 'Premium' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800';
    };

    return (
        <div>
            <Header header={"Manage Fans"} />
            <div className="max-w-screen-2xl mx-auto">
                <div className="mx-4 sm:mx-9 my-5">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mb-6">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-lg bg-blue-500">
                                    <UserIcon className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Fans</p>
                                    <p className="text-2xl font-semibold text-gray-900">8,456</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-lg bg-green-500">
                                    <UserIcon className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Active Today</p>
                                    <p className="text-2xl font-semibold text-gray-900">1,567</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-lg bg-yellow-500">
                                    <UserIcon className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">New This Month</p>
                                    <p className="text-2xl font-semibold text-gray-900">423</p>
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
                                    placeholder="Search Fans..."
                                    required
                                />
                            </div>
                            <div className='flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4'>
                                <select className="px-3 py-2 border border-gray-300 rounded-lg">
                                    <option>Sort By</option>
                                    <option>Most Active</option>
                                    <option>Recently Joined</option>
                                    <option>Most Plays</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fan</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Likes</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plug In</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {fans.map((fan) => (
                                    <tr key={fan.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                                    {fan?.avatar ?
                                                        <img src={fan.avatar || "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="fan avatar" className='rounded-full w-12 h-12 object-cover' />
                                                        :
                                                        <span className="text-gray-600 text-sm font-semibold">
                                                            {fan.name.split(' ').map(n => n[0]).join('')}
                                                        </span>
                                                    }
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{fan.name}</div>
                                                    <div className="text-sm text-gray-500">{fan.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{fan.likedTracks}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{fan.followingArtists}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{fan.lastActive}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(fan.status)}`}>
                                                {fan.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium space-x-2">
                                            <Link to={`/fans/${fan.id}`} className="text-blue-600 hover:text-blue-900">
                                                <EyeIcon className="w-5 h-5 inline" />
                                            </Link>
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