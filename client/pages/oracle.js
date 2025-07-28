import { useState } from 'react';
import OracleForm from '../components/OracleForm';
import OracleViewer from '../components/OracleViewer';
import Head from 'next/head';

export default function OraclePage() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (msg) => {
    setMessages((prev) => [msg, ...prev]);
  };

  return (
    <>
      <Head>
        <title>Submit Oracle – TruthMesh</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
        <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">🔐 Submit Oracle Message</h1>
        <OracleForm onSubmit={handleNewMessage} />
        <OracleViewer messages={messages} />
      </main>
    </>
  );
}
