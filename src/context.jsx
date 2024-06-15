/* eslint-disable no-unused-vars */
import { createClient } from "contentful";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState();
  const [route, setRoute] = useState("home");

  // route : about -> home

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "portfolio" });
      setPortfolio({ ...response.items[0].fields });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        portfolio,
        route,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
