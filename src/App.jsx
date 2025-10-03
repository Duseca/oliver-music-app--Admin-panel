// App.jsx
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Dashboard from './pages/Home'
import Users from './pages/Users'
import UserView from './pages/UserView'
import Artists from './pages/Artists'
import Content from './pages/Content'
import Faqs from './pages/Faqs'
import UploadQueue from './pages/UploadQueue'
import Reports from './pages/Reports'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import ArtistView from './pages/ArtistView'
// import Settings from './pages/Setting'
import Genres from './pages/Genres'
import Fans from './pages/Fans'
import FanView from './pages/FanView'
import AdminUpdatesPage from './pages/AdminUpdatesPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserView />} />
        <Route path="artists/:id" element={<ArtistView />} />
        <Route path="artists" element={<Artists />} />
<Route path="fans" element={<Fans />} />
        <Route path="fans/:id" element={<FanView />} />
        <Route path="content" element={<Content />} />
        <Route path="upload-queue" element={<UploadQueue />} />
        <Route path="genres" element={<Genres />} />
        <Route path="reports" element={<Reports />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="profile" element={<Profile />} />
         <Route path="updates" element={<AdminUpdatesPage />} />
        {/* <Route path="setting" element={<Settings />} /> */}
      </Route>
    </Routes>
  )
}

export default App