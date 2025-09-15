import { UserGroupIcon, MicrophoneIcon, MusicalNoteIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const stats = [
    { title: "Total Users", value: "12,847", icon: UserGroupIcon, color: "bg-blue-500" },
    { title: "Artists", value: "2,156", icon: MicrophoneIcon, color: "bg-green-500" },
    { title: "Tracks", value: "45,289", icon: MusicalNoteIcon, color: "bg-purple-500" },
    { title: "Reports", value: "12", icon: ExclamationTriangleIcon, color: "bg-red-500" }
  ];

  const recentActivities = [
    { action: "New user registered", user: "john.doe@example.com", time: "2 min ago" },
    { action: "Track uploaded", user: "artist.mike", time: "5 min ago" },
    { action: "Report submitted", user: "Report #1234", time: "12 min ago" },
    { action: "User suspended", user: "spam.user", time: "1 hour ago" }
  ];

  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.user}</p>
                    </div>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}