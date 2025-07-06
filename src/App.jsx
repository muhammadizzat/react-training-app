import './App.css'
import Counter from './components/Counter'
import GreetingCard from './components/GreetingCard'


function App() {

  return (
    <div>
      <h1>My First React App</h1>
      <GreetingCard name="Muhammad Izzat" />
      <GreetingCard name="Alice" />
      <Counter />
    </div>
  )
}

export default App
