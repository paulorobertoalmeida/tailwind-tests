import logo from "./logo.svg";
import "./App.css";
import {TailWindCSSButton, DarkModeButton} from "./GlobalComponents";

function App() {
  return (
    <div className="container p-4">
      <div className="p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-white-500">You have a new message!</p>
          <TailWindCSSButton>Testing</TailWindCSSButton>
        </div>
        
      </div>
        <DarkModeButton />
    </div>
    
  );
}

export default App;
