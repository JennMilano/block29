import './App.css'

import AllPlayers from "./features/AllPlayers";
import MainRoute from './features/MainRoute'
import NewPlayerForm from './features/NewPlayerForm'

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <section>
      <div id="title-h1">
        <h1></h1>
        </div>
      <div className="App">
        <NewPlayerForm />
        <MainRoute />
        <AllPlayers />
      </div>
    </section>
  );
}

// Export the App component as the default export
export default App;