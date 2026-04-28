// Greeting.jsx

// A reusable component that displays a name passed via props
function Greeting({ name }) {
  return (
    <div className="card">
      <h2 style={{color:"grey"}}>Hello, {name} 👋</h2>
      <p>Welcome to your React journey</p>
    </div>
  );
}

export default Greeting;