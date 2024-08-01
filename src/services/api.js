import axios from "axios";


const getToken=()=>{
  return localStorage.getItem("token");
}

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    Authorization:  `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  },
});

export const fetchInwardItems = async () => {
  // Mock API call
  return [
    { item: "Item 1", quantity: 10 },
    { item: "Item 2", quantity: 20 },
  ];
};

export default apiInstance;
