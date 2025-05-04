import axios from "axios"

const BaseUrl = "http://localhost:4000"

const products = {
  
}

export const getAllProducts = async () => {
  let res = await axios.get(BaseUrl+"/product/all");
  return res.data.products;
}

export const getProductsByCategory = async (category) => {
  
}

export const getNewArrivals = async () => {
  
}

export const getSaleProducts = async () => {
  
}
