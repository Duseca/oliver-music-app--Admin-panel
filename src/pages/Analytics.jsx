import { ChartBarIcon, UsersIcon, PlayIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';

export default function Analytics() {
  const metrics = [
    { title: "Daily Active Users", value: "12,847", change: "+5.2%", icon: UsersIcon, color: "bg-blue-500" },
    { title: "Monthly Active Users", value: "89,231", change: "+12.3%", icon: UsersIcon, color: "bg-green-500" },
    { title: "Total Plays", value: "2.4M", change: "+18.7%", icon: PlayIcon, color: "bg-purple-500" },
    { title: "Growth Rate", value: "8.1%", change: "+2.3%", icon: ArrowTrendingUpIcon, color: "bg-yellow-500" }
  ];

  const topTracks = [
    { name: "Summer Vibes", artist: "Artist Mike", plays: 145823 },
    { name: "Midnight Dreams", artist: "DJ Sarah", plays: 89234 },
    { name: "City Lights", artist: "Urban Beats", plays: 76543 },
    { name: "Ocean Waves", artist: "Chill Master", plays: 65432 },
    { name: "Electric Storm", artist: "Bass Drop", plays: 54321 }
  ];

  const topArtists = [
    { name: "Artist Mike", followers: 245823 },
    { name: "DJ Sarah", followers: 189234 },
    { name: "Urban Beats", followers: 156543 },
    { name: "Chill Master", followers: 145432 },
    { name: "Bass Drop", followers: 134321 }
  ];

  return (
    <div>
         <Header header={"Manage Analytics"} />
         <div className="max-w-screen-2xl mx-auto">
           <div className="mx-4 sm:mx-9 my-3">

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Platform performance metrics</p>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                  <p className="ml-2 text-sm font-semibold text-green-600">{metric.change}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Tracks */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Tracks by Plays</h3>
          <div className="space-y-3">
            {topTracks.map((track, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}.</span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{track.name}</p>
                    <p className="text-xs text-gray-500">{track.artist}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{track.plays.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">plays</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Artists */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Artists by Followers</h3>
          <div className="space-y-3">
            {topArtists.map((artist, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}.</span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{artist.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{artist.followers.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">followers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Funnel */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">User Journey Funnel</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded mr-3"></div>
              <span className="text-sm font-medium text-gray-900">App Visits</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 mr-2">45,673</span>
              <span className="text-sm text-gray-500">100%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded mr-3"></div>
              <span className="text-sm font-medium text-gray-900">Signups Started</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 mr-2">12,456</span>
              <span className="text-sm text-gray-500">27.3%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-600 rounded mr-3"></div>
              <span className="text-sm font-medium text-gray-900">Signups Completed</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 mr-2">8,932</span>
              <span className="text-sm text-gray-500">19.6%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-600 rounded mr-3"></div>
              <span className="text-sm font-medium text-gray-900">First Upload</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 mr-2">3,245</span>
              <span className="text-sm text-gray-500">7.1%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-600 rounded mr-3"></div>
              <span className="text-sm font-medium text-gray-900">Active Artists</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 mr-2">1,876</span>
              <span className="text-sm text-gray-500">4.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}