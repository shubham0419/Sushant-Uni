// This is a mock implementation. In a real app, you would connect to a backend API.

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Store users in localStorage for demo purposes
const getUsers = () => {
  const users = localStorage.getItem("users")
  return users ? JSON.parse(users) : []
}

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users))
}

const saveCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user))
}

export const loginUser = async (email, password) => {
  // Simulate API call
  await delay(800)

  const users = getUsers()
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    throw new Error("Invalid email or password")
  }

  // Don't store password in current session
  const { password: _, ...userWithoutPassword } = user
  saveCurrentUser(userWithoutPassword)

  return userWithoutPassword
}

export const registerUser = async (userData) => {
  // Simulate API call
  await delay(800)

  const users = getUsers()

  // Check if user already exists
  if (users.some((user) => user.email === userData.email)) {
    throw new Error("User with this email already exists")
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString(),
  }

  // Save to "database"
  saveUsers([...users, newUser])

  // Don't store password in current session
  const { password: _, ...userWithoutPassword } = newUser
  saveCurrentUser(userWithoutPassword)

  return userWithoutPassword
}

export const logoutUser = async () => {
  // Simulate API call
  await delay(300)
  localStorage.removeItem("currentUser")
  return true
}

export const getCurrentUser = async () => {
  // Simulate API call
  await delay(300)
  const user = localStorage.getItem("currentUser")
  return user ? JSON.parse(user) : null
}
