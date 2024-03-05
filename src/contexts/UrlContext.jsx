/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const [frontendBaseUrl, setFrontendBaseUrl] = useState("");

  useEffect(() => {
    // Get the frontend base URL
    const getFrontendBaseUrl = () => {
      const { protocol, host } = window.location;
      const frontendUrl = `${protocol}//${host}`;
      setFrontendBaseUrl(frontendUrl);
    };

    getFrontendBaseUrl();
  }, []);

  return (
    <UrlContext.Provider value={{ frontendBaseUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlProvider;
