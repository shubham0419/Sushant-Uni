import axios from "axios"

const getUsers = () => {
  
}
const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users))
}

const saveCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user))
}

export const loginUser = async (email, password) => {
 
}

export const registerUser = async (userData) => {
  
}
export const logoutUser = async () => {
  
}
export const getCurrentUser = async () => {
  
}
