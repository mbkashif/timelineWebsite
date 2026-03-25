import { useState } from "react";

export default function PasswordGate({ onUnlock }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const verifyResponse = await fetch("http://localhost:4000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
      });

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok || !verifyData.success) {
        setError("That’s not our code ❤️");
        setLoading(false);
        return;
      }

      await fetch("http://localhost:4000/log-visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ page: "main-site" })
      });

      onUnlock();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gate">
      <div className="gate-box">
        <h1>For You 💌</h1>
        <p>Enter the code to unlock our story</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Our secret..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Unlocking..." : "Unlock"}
          </button>
        </form>

        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
}