import { useState } from "react";
import UpdateForm from "../components/UpdateForm";
import Header from "../layouts/partials/header";

export default function AdminUpdatesPage() {
  const [updates, setUpdates] = useState([
    {
      version: "2.1.0",
      date: "2025-10-01",
      features: ["Fan badges", "Plugin analytics dashboard"],
      improvements: ["Faster track upload", "Better mobile responsiveness"],
      bugFixes: ["Fixed player controls", "Resolved search filter bug"],
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleSave = (newUpdate) => {
    setUpdates([newUpdate, ...updates]); // Add to top
    setShowForm(false);
  };

  return (
    <>
      <Header header={"Manage Updates"} />
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-4 sm:mx-9 my-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Release Updates</h1>
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Update
            </button>
          </div>

          {showForm && (
            <div className="mb-6 bg-white shadow rounded-lg p-4">
              <UpdateForm onSave={handleSave} onCancel={() => setShowForm(false)} />
            </div>
          )}

          <div className="space-y-4">
            {updates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold">
                  Version {update.version} - {update.date}
                </h2>

                {update.features.length > 0 && (
                  <div>
                    <h3 className="font-medium mt-2">✨ Features</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {update.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}

                {update.improvements.length > 0 && (
                  <div>
                    <h3 className="font-medium mt-2">🔧 Improvements</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {update.improvements.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}

                {update.bugFixes.length > 0 && (
                  <div>
                    <h3 className="font-medium mt-2">🐛 Bug Fixes</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {update.bugFixes.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
