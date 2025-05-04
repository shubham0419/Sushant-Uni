import axios from "axios"
import Cookies from "js-cookie"

const BaseUrl = "http://localhost:4000"

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
  let res = await axios.post(BaseUrl+"/auth/register",userData);
  Cookies.set("token",res.data.token,{expires:7})
  return res.data.user;
}

export const logoutUser = async () => {
  
}
export const getCurrentUser = async () => {
  
}
