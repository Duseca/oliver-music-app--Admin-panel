import {
  ExclamationTriangleIcon,
  FlagIcon,
  UserIcon,
  MusicalNoteIcon,
  UsersIcon,
  PlayIcon,
  ArrowTrendingUpIcon,
  LinkIcon,
  PhotoIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
    joinDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Artist Mike",
    email: "mike@example.com",
    role: "Artist",
    status: "Active",
    joinDate: "2024-02-20"
  },
  {
    id: 3,
    name: "Spam User",
    email: "spam@example.com",
    role: "User",
    status: "Suspended",
    joinDate: "2024-03-01"
  }
];

export const artists = [
  {
    id: 1,
    name: "Artist Mike",
    email: "mike@example.com",
    verified: true,
    fans: 15420,
    tracks: 23,
    joinDate: "2024-01-15",
    status: "Active",
    genre: "Rock",
    isFoundingArtist: true
  },
  {
    id: 2,
    name: "DJ Sarah",
    email: "sarah@example.com",
    verified: false,
    fans: 8930,
    tracks: 15,
    joinDate: "2024-02-20",
    status: "Active",
    genre: "PoP",
    isFoundingArtist: false
  },
  {
    id: 3,
    name: "Urban Beats",
    email: "urban@example.com",
    verified: true,
    fans: 23450,
    tracks: 45,
    joinDate: "2023-12-10",
    status: "Featured",
    genre: "Hip Hop",
    isFoundingArtist: true
  }
];

export const fans = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    joinDate: "2024-01-15",
    totalPlays: 1250,
    likedTracks: 45,
    followingArtists: 12,
    lastActive: "2 hours ago",
    status: "Active",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    membershipType: "Premium"
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma@example.com",
    joinDate: "2024-02-20",
    totalPlays: 890,
    likedTracks: 32,
    followingArtists: 8,
    lastActive: "1 day ago",
    status: "Active",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    membershipType: "Free"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    joinDate: "2023-12-10",
    totalPlays: 3450,
    likedTracks: 123,
    followingArtists: 25,
    lastActive: "3 hours ago",
    status: "Active",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    membershipType: "Premium"
  },
  {
    id: 4,
    name: "Sarah Davis",
    email: "sarah@example.com",
    joinDate: "2024-03-05",
    totalPlays: 567,
    likedTracks: 18,
    followingArtists: 5,
    lastActive: "2 weeks ago",
    status: "Inactive",
    membershipType: "Free"
  }
];

export const uploads = [
  {
    id: 1,
    filename: "summer-vibes.mp3",
    artist: "Artist Mike",
    uploadedAt: "2024-09-15 14:30",
    status: "processing",
    progress: 65,
    size: "4.2 MB"
  },
  {
    id: 2,
    filename: "cover-art.jpg",
    artist: "DJ Sarah",
    uploadedAt: "2024-09-15 14:25",
    status: "completed",
    progress: 100,
    size: "1.8 MB"
  },
  {
    id: 3,
    filename: "explicit-lyrics.mp3",
    artist: "Rapper Joe",
    uploadedAt: "2024-09-15 14:20",
    status: "flagged",
    progress: 100,
    size: "3.9 MB"
  },
  {
    id: 4,
    filename: "corrupted-file.mp3",
    artist: "Unknown Artist",
    uploadedAt: "2024-09-15 14:15",
    status: "failed",
    progress: 0,
    size: "0 MB"
  }
];

export const reports = [
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

export const recentTracks = [
  {
    id: 1,
    title: "Summer Vibes",
    plays: 12500,
    likes: 890,
    uploadDate: "2024-09-10",
    status: "Published"
  },
  {
    id: 2,
    title: "Midnight Dreams",
    plays: 8900,
    likes: 650,
    uploadDate: "2024-09-05",
    status: "Published"
  },
  {
    id: 3,
    title: "City Lights",
    plays: 5600,
    likes: 420,
    uploadDate: "2024-08-28",
    status: "Published"
  },
  {
    id: 4,
    title: "Ocean Waves",
    plays: 0,
    likes: 0,
    uploadDate: "2024-09-15",
    status: "Pending"
  }
];

export const notifications = [
  {
    id: 1,
    type: "report",
    title: "New Content Report",
    message: 'A track "Summer Vibes" has been reported for copyright violation',
    time: "5 minutes ago",
    read: false,
    icon: ExclamationTriangleIcon,
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: 2,
    type: "flag",
    title: "User Account Flagged",
    message: 'User "DJ Shadow" has been flagged for suspicious activity',
    time: "15 minutes ago",
    read: false,
    icon: FlagIcon,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: 3,
    type: "report",
    title: "Spam Report",
    message: 'Multiple users reported spam comments from "SpamBot123"',
    time: "1 hour ago",
    read: false,
    icon: ExclamationTriangleIcon,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    type: "user",
    title: "New Artist Registration",
    message:
      'Artist "Electric Dreams" has completed registration and is pending verification',
    time: "2 hours ago",
    read: true,
    icon: UserIcon,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 5,
    type: "content",
    title: "Content Pending Review",
    message: "5 new tracks are waiting for approval",
    time: "3 hours ago",
    read: true,
    icon: MusicalNoteIcon,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];


export const followingArtists = [
  {
    id: 1,
    name: "Artist Mike",
    genre: "Electronic",
    followDate: "2024-09-10"
  },
  {
    id: 2,
    name: "DJ Sarah",
    genre: "Pop",
    followDate: "2024-08-22"
  },
  {
    id: 3,
    name: "Urban Beats",
    genre: "Hip Hop",
    followDate: "2024-07-15"
  }
];

export const recentlyPlayed = [
  {
    id: 1,
    trackTitle: "Summer Vibes",
    artistName: "Artist Mike",
    playedAt: "2 hours ago",
    playCount: 5
  },
  {
    id: 2,
    trackTitle: "Midnight Dreams",
    artistName: "Artist Mike",
    playedAt: "5 hours ago",
    playCount: 3
  },
  {
    id: 3,
    trackTitle: "City Lights",
    artistName: "DJ Sarah",
    playedAt: "1 day ago",
    playCount: 8
  },
  {
    id: 4,
    trackTitle: "Ocean Waves",
    artistName: "Urban Beats",
    playedAt: "2 days ago",
    playCount: 2
  }
];

export const likedTracks = [
  {
    id: 1,
    trackTitle: "Summer Vibes",
    artistName: "Artist Mike",
    likedAt: "2024-09-15"
  },
  {
    id: 2,
    trackTitle: "Midnight Dreams",
    artistName: "Artist Mike",
    likedAt: "2024-09-12"
  },
  {
    id: 3,
    trackTitle: "City Lights",
    artistName: "DJ Sarah",
    likedAt: "2024-09-08"
  }
];

export const metrics = [
  {
    title: "Daily Active Users",
    value: "12,847",
    change: "+5.2%",
    icon: UsersIcon,
    color: "bg-blue-500",
  },
  {
    title: "Monthly Active Users",
    value: "89,231",
    change: "+12.3%",
    icon: UsersIcon,
    color: "bg-green-500",
  },
  {
    title: "Total Plays",
    value: "2.4M",
    change: "+18.7%",
    icon: PlayIcon,
    color: "bg-purple-500",
  },
  {
    title: "Growth Rate",
    value: "8.1%",
    change: "+2.3%",
    icon: ArrowTrendingUpIcon,
    color: "bg-yellow-500",
  },
];

export const additionalMetrics = [
  {
    title: "Total Plug ins",
    value: "1,234",
    change: "+8.4%",
    icon: LinkIcon,
    color: "bg-indigo-500",
  },
  {
    title: "Connections This Month",
    value: "5,678",
    change: "+15.2%",
    icon: LinkIcon,
    color: "bg-cyan-500",
  },
  {
    title: "Artist Images Posted",
    value: "3,892",
    change: "+22.1%",
    icon: PhotoIcon,
    color: "bg-pink-500",
  },
  {
    title: "Shorts Posted",
    value: "2,156",
    change: "+19.8%",
    icon: FilmIcon,
    color: "bg-orange-500",
  },
];

export const topTracks = [
  { name: "Summer Vibes", artist: "Artist Mike", plays: 145823 },
  { name: "Midnight Dreams", artist: "DJ Sarah", plays: 89234 },
  { name: "City Lights", artist: "Urban Beats", plays: 76543 },
  { name: "Ocean Waves", artist: "Chill Master", plays: 65432 },
  { name: "Electric Storm", artist: "Bass Drop", plays: 54321 },
];

export const topArtists = [
  { name: "Artist Mike", fans: 245823 },
  { name: "DJ Sarah", fans: 189234 },
  { name: "Urban Beats", fans: 156543 },
  { name: "Chill Master", fans: 145432 },
  { name: "Bass Drop", fans: 134321 },
];
