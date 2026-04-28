// Counter.jsx

import { useState } from "react";

// Counter component manages its own internal state
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter</h2>

      {/* Display state */}
      <p style={{ fontSize: "24px", margin: "10px 0" }}>
        {count}
      </p>

      {/* Update state */}
      <button
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}

export default Counter;