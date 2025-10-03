import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  CheckBadgeIcon,
  StarIcon,
  EyeIcon,
  TrashIcon,
  PlayIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';
import { recentTracks } from '../components/data';

export default function ArtistView() {
  const { id } = useParams();

  const artist = {
    id: id,
    name: "Artist Mike",
    email: "mike@example.com",
    phone: "+1234567890",
    verified: true,
    fans: 15420,
    tracks: 23,
    joinDate: "January 15, 2024",
    lastActive: "2 hours ago",
    status: "Active",
    genre: "Electronic",
    bio: "Electronic music producer and DJ from Los Angeles. Creating music for over 5 years with a passion for deep house and progressive sounds.",
    socialMedia: {
      instagram: "@artistmike",
      twitter: "@artistmike_music",
      spotify: "Artist Mike"
    },
    avatar: "https://images.pexels.com/photos/7289120/pexels-photo-7289120.jpeg?auto=compress&cs=tinysrgb&w=600",
    isFoundingArtist: true
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <Header header={"Artist Details"} link={'/artists'} arrow={true} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Artist Information</h2>
                  <div className="flex gap-2">
                    {!artist.verified && (
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                        Verify Artist
                      </button>
                    )}
                    {!artist.isFoundingArtist ? (
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm">
                        Add Founding Artist Badge
                      </button>
                    ) : (
                      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                        Remove Founding Artist Badge
                      </button>
                    )}
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                      Feature Artist
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                      Suspend
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="ml-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{artist.name}</h3>
                      {artist.verified && (
                        <CheckBadgeIcon className="w-6 h-6 text-blue-500" />
                      )}
                      {artist.isFoundingArtist && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold" title="Founding Artist">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Founding Artist
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{artist.email}</p>
                    <p className="text-sm text-gray-500">{artist.genre} • {artist.fans.toLocaleString()} fans</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Phone Number</label>
                    <p className="mt-1 text-sm text-gray-900">{artist.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Status</label>
                    <span className="mt-1 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {artist.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Join Date</label>
                    <p className="mt-1 text-sm text-gray-900">{artist.joinDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Last Active</label>
                    <p className="mt-1 text-sm text-gray-900">{artist.lastActive}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Total Tracks</label>
                    <p className="mt-1 text-sm text-gray-900">{artist.tracks}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Genre</label>
                    <p className="mt-1 text-sm text-gray-900">{artist.genre}</p>
                  </div>
                </div>

                {artist.bio && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-500">Biography</label>
                    <p className="mt-1 text-sm text-gray-900">{artist.bio}</p>
                  </div>
                )}

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-500 mb-2">Social Media</label>
                  <div className="flex flex-wrap gap-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                      Instagram: {artist.socialMedia.instagram}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Twitter: {artist.socialMedia.twitter}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Spotify: {artist.socialMedia.spotify}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-blue-500">
                    <PlayIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Plays</p>
                    <p className="text-2xl font-semibold text-gray-900">127.5K</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-red-500">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Likes</p>
                    <p className="text-2xl font-semibold text-gray-900">8.9K</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-500">
                    <ShareIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Shares</p>
                    <p className="text-2xl font-semibold text-gray-900">2.1K</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-purple-500">
                    <StarIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Fans</p>
                    <p className="text-2xl font-semibold text-gray-900">{artist.fans.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Tracks</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Track</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plays</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Likes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Upload Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTracks.map((track) => (
                      <tr key={track.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600">♪</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{track.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{track.plays.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{track.likes.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{track.uploadDate}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(track.status)}`}>
                            {track.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <EyeIcon className="w-5 h-5 inline" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <TrashIcon className="w-5 h-5 inline" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Uploaded new track "Ocean Waves"</p>
                      <p className="text-sm text-gray-500">Track is pending review</p>
                    </div>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Updated profile picture</p>
                      <p className="text-sm text-gray-500">Profile settings</p>
                    </div>
                    <p className="text-sm text-gray-400">1 day ago</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Track "Summer Vibes" reached 10K plays</p>
                      <p className="text-sm text-gray-500">Milestone achievement</p>
                    </div>
                    <p className="text-sm text-gray-400">3 days ago</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Updated bio and social media links</p>
                      <p className="text-sm text-gray-500">Profile settings</p>
                    </div>
                    <p className="text-sm text-gray-400">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}