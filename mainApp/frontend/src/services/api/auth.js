import axios from "axios"
import Cookies from "js-cookie"

const BaseUrl = "http://localhost:4000"

const getUsers = () => {
  
}


export const loginUser = async (email, password) => {
  let payload = {
    email,
    password
  }
  let res = await axios.post(BaseUrl+"/auth/login",payload);
  Cookies.set("token",res.data.token,{expires:7})
  return res.data.user;
}

export const registerUser = async (userData) => {
  let res = await axios.post(BaseUrl+"/auth/register",userData);
  Cookies.set("token",res.data.token,{expires:7})
  return res.data.user;
}

export const logoutUser = async () => {
  Cookies.remove("token");
}

export const getCurrentUser = async () => {
  
}
