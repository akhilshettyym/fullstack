import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My Custom App</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Example of rendering a component */}
    <App />
    <MyApp />

    {/* Render element created with React.createElement */}
    {reactElement}

    {/* Render element created with JSX */}
    {anotherElement}
  </StrictMode>
) 