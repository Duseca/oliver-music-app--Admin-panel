import { ExclamationTriangleIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';

export default function Reports() {
  const reports = [
    {
      id: 1,
      type: "Spam",
      title: "Spam content in comments",
      reportedBy: "user123@example.com",
      reportedUser: "spammer@test.com",
      priority: "High",
      status: "Pending",
      createdAt: "2024-09-15 10:30"
    },
    {
      id: 2,
      type: "Copyright",
      title: "Unauthorized music use",
      reportedBy: "record.label@music.com",
      reportedUser: "artist.mike@example.com",
      priority: "High",
      status: "Investigating",
      createdAt: "2024-09-14 15:45"
    },
    {
      id: 3,
      type: "Harassment",
      title: "Harassment in messages",
      reportedBy: "victim@example.com",
      reportedUser: "harasser@test.com",
      priority: "Medium",
      status: "Resolved",
      createdAt: "2024-09-13 09:20"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Investigating': return 'bg-blue-100 text-blue-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
     <div>
          <Header header={"Manage Reports"} />
          <div className="max-w-screen-2xl mx-auto">
            <div className="mx-4 sm:mx-9 my-3">

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Investigating</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <CheckIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex gap-4">
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>All Status</option>
            <option>Pending</option>
            <option>Investigating</option>
            <option>Resolved</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>All Types</option>
            <option>Spam</option>
            <option>Copyright</option>
            <option>Harassment</option>
          </select>
        </div>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                    {report.priority}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Type</p>
                    <p className="text-sm text-gray-900">{report.type}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Reported By</p>
                    <p className="text-sm text-gray-900">{report.reportedBy}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Reported User</p>
                    <p className="text-sm text-gray-900">{report.reportedUser}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Created</p>
                    <p className="text-sm text-gray-900">{report.createdAt}</p>
                  </div>
                </div>
              </div>

              <div className="ml-6 flex flex-col gap-2">
                {report.status === 'Pending' && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                    Investigate
                  </button>
                )}
                {report.status === 'Investigating' && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                      Resolve
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                      Reject
                    </button>
                  </>
                )}
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}