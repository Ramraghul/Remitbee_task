import './App.css';
import Schedular from "./components/Scheduler";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <>
      <CookiesProvider>
        <div className="App">
          <h1>Schedule</h1>
          <Schedular />
        </div>
      </CookiesProvider>
    </>
  );
}

export default App;
