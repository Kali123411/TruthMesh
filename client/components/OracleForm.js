import { useState } from 'react';

export default function OracleForm({ onSubmit }) {
  const [topic, setTopic] = useState("eth_usd_price");
  const [value, setValue] = useState("");
  const [oracleId, setOracleId] = useState("kaspa:your-address");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      type: "oracle-message",
      topic,
      value: parseFloat(value),
      timestamp: Math.floor(Date.now() / 1000),
      oracle_id: oracleId,
      signature: "mock-signature"
    };
    onSubmit?.(message);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-8">
      <div>
        <label className="block text-sm font-medium text-gray-700">Topic</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Value</label>
        <input
          type="number"
          step="0.01"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Oracle ID (Kaspa address)</label>
        <input
          type="text"
          value={oracleId}
          onChange={(e) => setOracleId(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Submit Oracle Message
      </button>

      {submitted && (
        <p className="text-sm text-green-600 mt-4">✅ Oracle message submitted (mock).</p>
      )}
    </form>
  );
}
