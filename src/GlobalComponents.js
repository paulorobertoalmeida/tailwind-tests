// We can export all of the Css components here
export function TailWindCSSButton(props) {
  return (
    <button className="bg-blue-500 dark:text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
      {props.children}
    </button>
  );
}

export function DarkModeButton() {
  return (
    <div className="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3">
      <div class="flex justify-end items-center space-x-2 mx-auto relative">
        <span class="text-xs font-extralight">Light </span>
        <span class="text-xs font-semibold">Dark</span>
      </div>
    </div>
  );
}
