import "./App.css";
import ConditionalGreeting from "./components/ConditionalGreeting";
import Counter from "./components/Counter";
import GreetingCard from "./components/GreetingCard";
import InputLogger from "./components/InputLogger";
import { useTheme } from "./components/ThemeContext";


function App() {
  const { theme, toggleTheme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#121212',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '2rem'
  };

  const employees = [
    { id: "0019", name: "Izzat" },
    { id: "0038", name: "John" },
    { id: "0027", name: "Rob" },
  ];

  return (
    <div style={appStyle}>
      <h1>My First React App</h1>
      <h1>{theme.toUpperCase()} MODE</h1>
      {employees.map((employee) => (
        <GreetingCard key={employee.id} name={employee.name} />
      ))}

      <Counter />

      <ConditionalGreeting name="Izzat" isLoggedIn={true} />
      <ConditionalGreeting name="Guest" isLoggedIn={false} />

      <InputLogger />

      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;
