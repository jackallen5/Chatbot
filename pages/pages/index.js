import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Chatbot</h1>
      <p className="mb-6">Chat with an AI assistant and get instant responses.</p>
      <Link href="/chat">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Start Chatting</button>
      </Link>
    </div>
  );
}
