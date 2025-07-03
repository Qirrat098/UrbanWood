import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import AppRouter from "./routes/AppRouter"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./styles/App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
