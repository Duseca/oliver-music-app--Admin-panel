import { useState } from 'react';
import { 
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  PlayIcon,
  PauseIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const StatusBadge = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'processing':
        return { color: 'bg-blue-100 text-blue-800', icon: ClockIcon };
      case 'completed':
        return { color: 'bg-green-100 text-green-800', icon: CheckCircleIcon };
      case 'failed':
        return { color: 'bg-red-100 text-red-800', icon: XCircleIcon };
      case 'flagged':
        return { color: 'bg-yellow-100 text-yellow-800', icon: ExclamationCircleIcon };
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: ClockIcon };
    }
  };

  const { color, icon: Icon } = getStatusConfig();

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
      <Icon className="w-3 h-3 mr-1" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default function UploadQueue() {
  const [uploads, setUploads] = useState([
    {
      id: 1,
      filename: "summer-vibes.mp3",
      artist: "Artist Mike",
      uploadedAt: "2024-09-15 14:30",
      status: "processing",
      progress: 65,
      type: "audio",
      size: "4.2 MB",
      duration: "3:45",
      flagReason: null
    },
    {
      id: 2,
      filename: "cover-art.jpg",
      artist: "DJ Sarah",
      uploadedAt: "2024-09-15 14:25",
      status: "completed",
      progress: 100,
      type: "image",
      size: "1.8 MB",
      duration: null,
      flagReason: null
    },
    {
      id: 3,
      filename: "explicit-lyrics.mp3",
      artist: "Rapper Joe",
      uploadedAt: "2024-09-15 14:20",
      status: "flagged",
      progress: 100,
      type: "audio",
      size: "3.9 MB",
      duration: "4:12",
      flagReason: "Explicit content detected"
    },
    {
      id: 4,
      filename: "corrupted-file.mp3",
      artist: "Unknown Artist",
      uploadedAt: "2024-09-15 14:15",
      status: "failed",
      progress: 0,
      type: "audio",
      size: "0 MB",
      duration: null,
      flagReason: "File corruption detected"
    }
  ]);

  const [statusFilter, setStatusFilter] = useState('all');

  const handleRetry = (uploadId) => {
    setUploads(prev => prev.map(upload => 
      upload.id === uploadId 
        ? { ...upload, status: 'processing', progress: 0 }
        : upload
    ));
  };

  const handleApprove = (uploadId) => {
    setUploads(prev => prev.map(upload => 
      upload.id === uploadId 
        ? { ...upload, status: 'completed', flagReason: null }
        : upload
    ));
  };

  const handleReject = (uploadId) => {
    if (window.confirm('Are you sure you want to reject this upload?')) {
      setUploads(prev => prev.filter(upload => upload.id !== uploadId));
    }
  };

  const filteredUploads = uploads.filter(upload => 
    statusFilter === 'all' || upload.status === statusFilter
  );

  const getActionButtons = (upload) => {
    switch (upload.status) {
      case 'failed':
        return (
          <button
            onClick={() => handleRetry(upload.id)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Retry
          </button>
        );
      case 'flagged':
        return (
          <div className="flex gap-2">
            <button
              onClick={() => handleApprove(upload.id)}
              className="text-green-600 hover:text-green-800 text-sm font-medium"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(upload.id)}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Reject
            </button>
          </div>
        );
      case 'processing':
        return (
          <button className="text-gray-400 text-sm font-medium cursor-not-allowed">
            Processing...
          </button>
        );
      default:
        return (
          <span className="text-green-600 text-sm font-medium">Complete</span>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Upload Queue</h1>
        <p className="mt-1 text-sm text-gray-600">
          Monitor and manage file uploads and processing
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mb-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Processing</p>
              <p className="text-2xl font-semibold text-gray-900">
                {uploads.filter(u => u.status === 'processing').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {uploads.filter(u => u.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center">
            <ExclamationCircleIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Flagged</p>
              <p className="text-2xl font-semibold text-gray-900">
                {uploads.filter(u => u.status === 'flagged').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <div className="flex items-center">
            <XCircleIcon className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Failed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {uploads.filter(u => u.status === 'failed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Filter by status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="flagged">Flagged</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Upload Queue Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Artist
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUploads.map((upload) => (
                <tr key={upload.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${
                        upload.type === 'audio' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {upload.type === 'audio' ? '♪' : '🖼'}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{upload.filename}</div>
                        <div className="text-sm text-gray-500">{upload.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {upload.artist}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {upload.uploadedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={upload.status} />
                    {upload.flagReason && (
                      <div className="text-xs text-red-600 mt-1">{upload.flagReason}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            upload.status === 'failed' ? 'bg-red-600' :
                            upload.status === 'flagged' ? 'bg-yellow-600' :
                            upload.status === 'completed' ? 'bg-green-600' : 'bg-blue-600'
                          }`}
                          style={{ width: `${upload.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{upload.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {upload.duration && (
                      <div>Duration: {upload.duration}</div>
                    )}
                    <div className="capitalize">{upload.type} file</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {getActionButtons(upload)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}