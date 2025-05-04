import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CategoriesPage from "./pages/Categories"
import NewArrivalsPage from "./pages/NewArrivalsPage"
import SalesPage from "./pages/SalesPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage"
import WishlistPage from "./pages/WishListPage"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Routes with Navbar */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <Navbar />
                <CategoriesPage />
              </>
            }
          />
          <Route
            path="/new-arrivals"
            element={
              <>
                <Navbar />
                <NewArrivalsPage />
              </>
            }
          />
          <Route
            path="/sales"
            element={
              <>
                <Navbar />
                <SalesPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactPage />
              </>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Navbar />
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Navbar />
                <WishlistPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
