import logo from "./logo.svg";
import "./App.css";
import TailWindCSSButton from "./GlobalComponents";

function App() {
  return (
    <div className="container p-4">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
          <TailWindCSSButton>Testing</TailWindCSSButton>
        </div>
        
      </div>
      <div className="py-2 px-4 bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
              hello
          </button>
        </div>
    </div>
    
  );
}

export default App;
