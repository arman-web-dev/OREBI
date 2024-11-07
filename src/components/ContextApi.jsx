import axios from 'axios';
import React, { useEffect, useState, createContext } from 'react';

const ApiData = createContext(); 

const ContextApi = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const getData = () => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setInfo(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <ApiData.Provider value={{ info, isLogin, setIsLogin }}>
      {children}
    </ApiData.Provider>
  );
};

export default ContextApi;


export const useAuth = () => {
  return React.useContext(ApiData); 
};

