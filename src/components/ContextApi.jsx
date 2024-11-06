import axios from 'axios';
import React, { useEffect, useState, createContext } from 'react';

const ApiData = createContext(); // Define context

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

// Export ContextApi as the default export
export default ContextApi;

// Custom hook to access the context
// Custom hook to access the context
export const useAuth = () => {
  return React.useContext(ApiData); // Ensure this returns the context properly
};

