export default function OracleViewer({ messages }) {
  if (!messages || messages.length === 0) return null;

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-teal-600 mb-4">🧠 Oracle Messages</h2>
      <ul className="space-y-4">
        {messages.map((msg, idx) => (
          <li key={idx} className="bg-white rounded p-4 shadow border text-sm">
            <strong>{msg.topic}</strong>: {msg.value}<br />
            <span className="text-gray-500">by {msg.oracle_id}</span><br />
            <code className="text-xs text-gray-400">ts: {msg.timestamp}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
