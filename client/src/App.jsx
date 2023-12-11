import './App.css'
import { AppRouter } from './routes/AppRouter'
import { BrowserRouter } from "react-router-dom"
import { LoginProvider } from "./context/LoginContext"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <AppRouter/>
        </LoginProvider>
      </BrowserRouter>
    </>

  )
}

export default App
