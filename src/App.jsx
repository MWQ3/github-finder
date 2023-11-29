import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import Alert from "./components/layouts/Alert"
import { GithubProvider } from "./components/context/github/GithubContext"
import { AlertProvider } from "./components/context/alert/AlertContext"
import User from "./pages/User"


function App() {
    return (
      <GithubProvider>
        <AlertProvider>
        <Router>  
        <div className="flex flex-col justify-between h-screen">
          
          < Navbar />

          <main className="container mx-auto px-3 pb-12">
            < Alert />
          <Routes>
            < Route path="/" element={ < Home /> } />
            < Route path="/about" element={ < About /> } />
            < Route path="/user/:login" element={ < User /> } />
            < Route path="/notfound" element={ < Notfound /> } />
            < Route path="/*" element={ < Notfound /> } />
          </Routes>
          </main>

          < Footer />

        </div>
        </Router>
        </AlertProvider>
      </GithubProvider>
  )
}

export default App
