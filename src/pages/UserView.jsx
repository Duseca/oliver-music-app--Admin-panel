import Header from '../layouts/partials/header';
import sumel from "../assets/sumel.png"
export default function UserView() {
  const user = {
    name: "Samuel",
    email: "Samuel@gmail.com",
    phone: "+1234567890",
    role: "User",
    status: "Active",
    joinDate: "January 15, 2024",
    age: "23",
    genre: "Blues",
    lastActive: "2 hours ago",
    location: "Manchester United states",
    avatar: sumel
  };

  return (
       <div>
      <Header header={"User Details"} link={'/users'} arrow={true} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">

      {/* <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
      </div> */}

      {/* User Info Card */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">User Information</h2>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Suspend User
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500">Phone Number</label>
              <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Role</label>
              <p className="mt-1 text-sm text-gray-900">{user.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Status</label>
              <span className="mt-1 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                {user.status}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Age</label>
              <p className="mt-1 text-sm text-gray-900">{user.age} Years old</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Selected Genre</label>
              <p className="mt-1 text-sm text-gray-900">{user.genre}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Join Date</label>
              <p className="mt-1 text-sm text-gray-900">{user.joinDate}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Location</label>
              <p className="mt-1 text-sm text-gray-900">{user.location}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Last Active</label>
              <p className="mt-1 text-sm text-gray-900">{user.lastActive}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity History */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-900">Logged in from mobile</p>
                <p className="text-sm text-gray-500">IP: 192.168.1.1</p>
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
                <p className="text-sm font-medium text-gray-900">Created playlist</p>
                <p className="text-sm text-gray-500">"My Favorites"</p>
              </div>
              <p className="text-sm text-gray-400">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}