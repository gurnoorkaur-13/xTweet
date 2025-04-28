// frontend/src/components/common/SummarizeButton.jsx
import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner"; // optional spinner

export default function SummarizeButton({ content }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/summarize", { text: content });
      setSummary(res.data.summary);
      setVisible(true);
    } catch (err) {
      console.error("Error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleSummarize}
        className="text-blue-600 hover:underline"
      >
        {loading ? <LoadingSpinner /> : "Summarize Thread"}
      </button>

      {visible && (
        <div className="mt-2 p-3 bg-gray-100 border rounded text-sm">
          <strong>Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
