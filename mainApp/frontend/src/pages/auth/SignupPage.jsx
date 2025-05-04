"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Eye, EyeOff, UserPlus } from "lucide-react"
import "./auth.css"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { signup } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return false
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const result = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      if (!result.success) {
        setError(result.error)
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join SportHub and get access to exclusive deals</p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="auth-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="auth-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                  className="auth-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="auth-input"
                />
              </div>
            </div>

            <div className="terms-checkbox">
              <label>
                <input type="checkbox" required /> I agree to the{" "}
                <Link to="/terms" className="auth-link">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="auth-link">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="auth-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  <UserPlus size={18} />
                  <span>Create Account</span>
                </>
              )}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.086-9.212l4.17-2.388c.23-.132.23-.458 0-.59l-4.17-2.388c-.247-.142-.537.09-.537.296v4.774c0 .206.29.437.537.296z"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>
            <button className="social-button facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.086-9.212l4.17-2.388c.23-.132.23-.458 0-.59l-4.17-2.388c-.247-.142-.537.09-.537.296v4.774c0 .206.29.437.537.296z"
                />
              </svg>
              <span>Sign up with Facebook</span>
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="auth-image-container">
          <div className="auth-image-content">
            <h2>
              SPORT<span className="logo-accent">HUB</span>
            </h2>
            <p className="auth-quote">"The more difficult the victory, the greater the happiness in winning."</p>
            <p className="auth-quote-author">— Pelé</p>
          </div>
        </div>
      </div>
    </div>
  )
}
