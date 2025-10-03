import React, { useState } from 'react'
import { PiBellLight } from "react-icons/pi";
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { notifications } from '../../components/data';

export default function Header({ header, link, arrow }) {
  const [drop, setDrop] = useState(false);
  const [showMenue, setShowMenue] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotificationClick = () => {
    setShowMenue(!showMenue);
  };

  return (
    <div>
      <div className='bg-white' >
        <nav className="text-gray-350">
          <div className=" flex flex-wrap items-center justify-between px-4 py-9 sm:p-8">
            <div className="flex items-center drop-shadow-lg">
              {
                <Link to={link}>
                  <div className='flex items-center gap-1'>
                    {arrow &&
                      <IoArrowBack className='w-5 h-5' />
                    }
                    <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap capitalize ">{header}</span>
                  </div>
                </Link>
              }
            </div>
            <div className="relative" id="navbar-default">
              <div className='flex flex-row'>
                <button
                  onClick={handleNotificationClick}
                  className='rounded-full drop-shadow-lg flex justify-center items-center mr-1 sm:mr-4 w-9 h-9 relative'
                >
                  <PiBellLight className='w-6 h-6' />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <button type="button" className="flex text-sm rounded-full md:mr-0" onClick={e => setDrop(!drop)} >
                  <div className='flex items-center text-sm drop-shadow-lg'>
                    <img className='rounded-full drop sm:mr-2 w-9 h-9 object-cover' loading='lazy' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" alt='profile' />
                    <span className='hidden sm:block'>Davey</span>
                  </div>
                </button>
              </div>

              <div className={`z-50 ${drop ? null : 'hidden'} absolute w-full px-4 my-4 text-gray-950 font-medium list-none bg-white backdrop-blur-md bg-opacity-10 divide-y divide-gray-100 rounded-lg shadow`}>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-150 hover:text-white hover:rounded-md ">Profile</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <aside className={`fixed top-0 right-0 z-40 w-full sm:w-96 text-black bg-white h-screen transition-transform duration-300 ${showMenue ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`} aria-label="Notifications">
        <div className="h-full flex flex-col">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                {unreadCount > 0 && (
                  <p className="text-sm text-gray-600">{unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
                )}
              </div>
              <button
                className='text-2xl text-gray-600 hover:text-gray-900 transition-colors'
                onClick={() => setShowMenue(false)}
              >
                <RiCloseFill />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <PiBellLight className="w-16 h-16 mb-4" />
                <p className="text-lg font-medium">No notifications</p>
                <p className="text-sm">You're all caught up!</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`rounded-lg border px-4 py-3 transition-all hover:shadow-md cursor-pointer ${notification.read
                      ? 'bg-white border-gray-200'
                      : 'bg-blue-50 border-blue-200'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${notification.bgColor} flex-shrink-0`}>
                      <notification.icon className={`w-5 h-5 ${notification.iconColor}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className={`font-semibold text-sm ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
              <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                Mark all as read
              </button>
            </div>
          )}
        </div>
      </aside>

      {showMenue && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={() => setShowMenue(false)}
        ></div>
      )}
    </div>
  )
}