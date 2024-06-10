/* eslint-disable no-unused-vars */
import { createClient } from "contentful";
import React, { useContext, useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState();

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
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        portfolio,
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
