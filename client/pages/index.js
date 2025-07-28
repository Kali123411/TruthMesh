import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TruthMesh – DAG Oracle Mesh</title>
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">🔗 TruthMesh</h1>
        <p className="mb-8 text-lg text-gray-700">
          Visualize and analyze truth propagation through Kaspa’s blockDAG.
        </p>
        <div className="rounded-lg border p-4 bg-white shadow">
          <p className="text-sm text-gray-500">DAG status and oracle submissions coming soon...</p>
        </div>
      </main>
    </>
  );
}
