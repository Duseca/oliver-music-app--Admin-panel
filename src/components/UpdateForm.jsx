import { useState } from "react";

export default function UpdateForm({ onSave, onCancel }) {
  const [version, setVersion] = useState("");
  const [date, setDate] = useState("");
  const [features, setFeatures] = useState("");
  const [improvements, setImprovements] = useState("");
  const [bugFixes, setBugFixes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUpdate = {
      version,
      date,
      features: features.split("\n"),
      improvements: improvements.split("\n"),
      bugFixes: bugFixes.split("\n"),
    };
    onSave(newUpdate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Version</label>
        <input
          type="text"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="e.g. 2.1.0"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Release Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">✨ Features</label>
        <textarea
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          className="w-full border rounded-lg p-2"
          rows="3"
          placeholder="One feature per line"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">🔧 Improvements</label>
        <textarea
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
          className="w-full border rounded-lg p-2"
          rows="3"
          placeholder="One improvement per line"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">🐛 Bug Fixes</label>
        <textarea
          value={bugFixes}
          onChange={(e) => setBugFixes(e.target.value)}
          className="w-full border rounded-lg p-2"
          rows="3"
          placeholder="One bug fix per line"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}
