// App.jsx
import profile from './profile.jsx'

// Root component that combines everything
function App() {
  const name = "Gabriel Mutavi" 
  const role = "Developer"
  return (
    <>
    <div>
      <profile>{name}</profile>
      <p>{role}</p>
    </div>
    <profile/>
    </>
  );
}

export default App;