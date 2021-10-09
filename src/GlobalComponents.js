// We can export all of the Css components here
export function TailWindCSSButton(props) {
    return (
      <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">{props.children}</button>
    )
  }


export function DarkModeButton() {
    return (
        <div className="py-2 px-4 bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
              hello
          </button>
        </div>
    )
}
