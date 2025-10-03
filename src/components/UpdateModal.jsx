import { useState } from "react";

export default function UpdatesModal({ update, isOpen, onClose }) {
  if (!isOpen || !update) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-2">🎉 What's New - Version {update.version}</h2>
        <p className="text-sm text-gray-500 mb-4">{update.date}</p>

        {update.features?.length > 0 && (
          <div className="mb-3">
            <h3 className="font-semibold">✨ New Features:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {update.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {update.improvements?.length > 0 && (
          <div className="mb-3">
            <h3 className="font-semibold">🔧 Improvements:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {update.improvements.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {update.bugFixes?.length > 0 && (
          <div className="mb-3">
            <h3 className="font-semibold">🐛 Bug Fixes:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {update.bugFixes.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
