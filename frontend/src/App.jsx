import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("Unknown");
  const [loading, setLoading] = useState(false);

  const sendCommand = async (command) => {
    try {
      setLoading(true);
      await fetch("http://localhost:5000/device", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command }),
      });
      const res = await fetch("http://localhost:5000/status");
      const data = await res.json();
      setStatus(data.status);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-10">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
        🔧 Automated Device Control
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => sendCommand("ON")}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-lg rounded-2xl shadow-lg hover:shadow-green-400/50"
          disabled={loading}
        >
          Turn ON
        </button>

        <button
          onClick={() => sendCommand("OFF")}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-lg rounded-2xl shadow-lg hover:shadow-red-400/50"
          disabled={loading}
        >
          Turn OFF
        </button>
      </div>

      <div className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md w-64 border border-white/20">
        <p className="text-lg font-semibold text-gray-200">Device Status:</p>
        <p
          className={`text-2xl font-bold mt-2 ${
            status.includes("ON") ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      </div>

      <footer className="text-sm text-gray-300 mt-8">
        Built by <span className="font-medium text-white">Caren Chibwara</span>
      </footer>
    </div>
  );
}

export default App;
