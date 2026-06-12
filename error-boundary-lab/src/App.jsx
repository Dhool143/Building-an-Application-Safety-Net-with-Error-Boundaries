import Dashboard from "./components/Dashboard";
import WeatherWidget from "./components/WeatherWidget";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Dashboard />

      <ErrorBoundary>
        <WeatherWidget crash={true} />
      </ErrorBoundary>
    </div>
  );
}

export default App;