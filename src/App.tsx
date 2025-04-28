import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = () => {
    setShortenedUrl(`short.ly/${btoa(url).slice(0, 6)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">URL Shortener</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleShorten}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Shorten URL
        </button>
        {shortenedUrl && (
          <p className="mt-4 text-center text-gray-700">
            Shortened URL: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{shortenedUrl}</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
