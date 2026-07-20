import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+`~-=[]{}|;:,.<>?/"

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="fixed top-0 left-0 min-h-screen w-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-lg bg-gray-800 text-white shadow-md rounded-lg px-6 py-8 text-center">

        <h2 className="text-3xl font-semibold mb-5 text-orange-400">
          Password Generator
        </h2>

        <div className="flex items-center shadow rounded-lg overflow-hidden bg-gray-700">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-3 text-lg bg-gray-700 text-white outline-none placeholder-gray-400"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />

          <button
            style={{ backgroundColor: "#4a5568" }}
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 text-white px-5 py-3 font-semibold hover:bg-blue-700 transition duration-200">
            Copy
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-sm gap-5 mt-5">
          {/* Length Slider */}
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => setLength(parseInt(e.target.value, 10))}
            />
            <span className="text-orange-400 font-semibold">Length: {length}</span>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className="w-5 h-5 accent-orange-500"
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput" className="text-white">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              className="w-5 h-5 accent-orange-500"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="characterInput" className="text-white">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;