function App() {
  const sendMessage = () => {
    window.Main.sendMessage("edan")
  }

  return (
    <div className="bg-gray-900 h-screen text-gray-50 flex flex-col items-center justify-center gap-5">
      <div className="flex"></div>
      <h1 className="text-5xl">
        Vite + React + <span className="text-blue-300">Tailwind</span>
      </h1>
      <div className="card flex flex-col items-center gap-5">
        <button
          className="border border-teal-300 px-5 py-2 rounded-full text-teal-300 hover:border-teal-400 hover:text-teal-400"
          onClick={sendMessage}
        >
          Send Message (to terminal)
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
