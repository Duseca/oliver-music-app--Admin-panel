import { Link, useParams } from 'react-router-dom';
import {
    ArrowLeftIcon,
    PlayIcon,
    HeartIcon,
    UserIcon,
    MusicalNoteIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';
import { followingArtists, likedTracks, recentlyPlayed } from '../components/data';

export default function FanView() {
    const { id } = useParams();

    const fan = {
        id: id,
        name: "John Smith",
        email: "john@example.com",
        age: 23,
        joinDate: "January 15, 2024",
        lastActive: "2 hours ago",
        status: "Active",
        membershipType: "Premium",
        membershipStartDate: "January 15, 2024",
        totalPlays: 1250,
        likedTracks: 45,
        followingArtists: 12,
        location: "Los Angeles, CA",
        bio: "Music enthusiast and lover of all genres. Always looking for new artists to discover.",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    };

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
            <Header header={"Fan Details"} link={'/fans'} arrow={true} />
            <div className="max-w-screen-2xl mx-auto">
                <div className="mx-4 sm:mx-9 my-5">

                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Fan Information</h2>
                                    <div className="flex gap-2">
                                        {fan.membershipType === 'Free' && (
                                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                                                Upgrade to Premium
                                            </button>
                                        )}
                                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                                            Suspend Account
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={fan.avatar}
                                        alt={fan.name}
                                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                                    />
                                    <div className="ml-6">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-2xl font-semibold text-gray-900">{fan.name}</h3>
                                        </div>
                                        <p className="text-gray-600">{fan.email}</p>
                                        <p className="text-sm text-gray-500">{fan.location}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500">Status</label>
                                        <span className={`mt-1 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(fan.status)}`}>
                                            {fan.status}
                                        </span>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500">Age</label>
                                        <p className="mt-1 text-sm text-gray-900">{fan.age}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500">Location</label>
                                        <p className="mt-1 text-sm text-gray-900">{fan.location}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500">Join Date</label>
                                        <p className="mt-1 text-sm text-gray-900">{fan.joinDate}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500">Last Active</label>
                                        <p className="mt-1 text-sm text-gray-900">{fan.lastActive}</p>
                                    </div>
                                    {/* <div>
                    <label className="block text-sm font-medium text-gray-500">Membership Start Date</label>
                    <p className="mt-1 text-sm text-gray-900">{fan.membershipStartDate}</p>
                  </div> */}

                                </div>

                                {fan.bio && (
                                    <div className="mt-6">
                                        <label className="block text-sm font-medium text-gray-500">Bio</label>
                                        <p className="mt-1 text-sm text-gray-900">{fan.bio}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-lg bg-blue-500">
                                        <PlayIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Total Plays</p>
                                        <p className="text-2xl font-semibold text-gray-900">{fan.totalPlays.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-lg bg-red-500">
                                        <HeartIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Liked Tracks</p>
                                        <p className="text-2xl font-semibold text-gray-900">{fan.likedTracks}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-lg bg-purple-500">
                                        <UserIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Plug Ins</p>
                                        <p className="text-2xl font-semibold text-gray-900">{fan.followingArtists}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Plug Ins ({followingArtists.length})</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Genre</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Follow Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {followingArtists.map((artist) => (
                                            <tr key={artist.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                            <span className="text-gray-600 text-sm">🎤</span>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{artist.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">{artist.genre}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{artist.followDate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Recently Played</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Track</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Play Count</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Played</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {recentlyPlayed.map((track) => (
                                            <tr key={track.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                            <span className="text-blue-600">♪</span>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{track.trackTitle}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">{track.artistName}</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">{track.playCount} times</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{track.playedAt}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">Liked Tracks ({likedTracks.length})</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Track</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Liked Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {likedTracks.map((track) => (
                                            <tr key={track.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                                            <HeartIcon className="w-5 h-5 text-red-600" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{track.trackTitle}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">{track.artistName}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{track.likedAt}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Activity History */}
                        {/* <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Played "Summer Vibes" by Artist Mike</p>
                      <p className="text-sm text-gray-500">Listening activity</p>
                    </div>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Liked "Midnight Dreams"</p>
                      <p className="text-sm text-gray-500">Track interaction</p>
                    </div>
                    <p className="text-sm text-gray-400">5 hours ago</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Started following DJ Sarah</p>
                      <p className="text-sm text-gray-500">Artist follow</p>
                    </div>
                    <p className="text-sm text-gray-400">1 day ago</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Updated profile picture</p>
                      <p className="text-sm text-gray-500">Profile settings</p>
                    </div>
                    <p className="text-sm text-gray-400">3 days ago</p>
                  </div>
                </div>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}