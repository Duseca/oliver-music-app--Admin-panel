import { ClockIcon, CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Header from '../layouts/partials/header';
import { uploads } from '../components/data';

export default function UploadQueue() {
 
  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing': return ClockIcon;
      case 'completed': return CheckCircleIcon;
      case 'flagged': return ExclamationCircleIcon;
      case 'failed': return XCircleIcon;
      default: return ClockIcon;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'flagged': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'flagged': return 'bg-yellow-600';
      case 'failed': return 'bg-red-600';
      default: return 'bg-blue-600';
    }
  };

  return (
   <div>
      <Header header={"Manage Upload Queue"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Processing</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ExclamationCircleIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Flagged</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <XCircleIcon className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Failed</p>
              <p className="text-2xl font-semibold text-gray-900">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <select className="px-3 py-2 border border-gray-300 rounded-lg">
          <option>All Status</option>
          <option>Processing</option>
          <option>Completed</option>
          <option>Flagged</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Upload Queue Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Upload Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {uploads.map((upload) => {
              const StatusIcon = getStatusIcon(upload.status);
              return (
                <tr key={upload.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm">♪</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{upload.filename}</div>
                        <div className="text-sm text-gray-500">{upload.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{upload.artist}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{upload.uploadedAt}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(upload.status)}`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(upload.status)}`}
                          style={{ width: `${upload.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{upload.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {upload.status === 'failed' && (
                      <button className="text-blue-600 hover:text-blue-800">Retry</button>
                    )}
                    {upload.status === 'flagged' && (
                      <div className="space-x-2">
                        <button className="text-green-600 hover:text-green-800">Approve</button>
                        <button className="text-red-600 hover:text-red-800">Reject</button>
                      </div>
                    )}
                    {upload.status === 'processing' && (
                      <span className="text-gray-400">Processing...</span>
                    )}
                    {upload.status === 'completed' && (
                      <span className="text-green-600">Complete</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}