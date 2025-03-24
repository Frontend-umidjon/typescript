import axios from "axios"
 
const request = axios.create({
  baseURL: "https://67de8e46471aaaa74284dbc6.mockapi.io/phones",
})

export default request