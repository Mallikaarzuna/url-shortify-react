/* eslint-disable react/no-unescaped-entities */
import UrlShortner from "../components/UrlShortener/UrlShortener";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { isUserAuth } = useContext(AuthContext);
  return (
    <>
      <h2 className="text-primary my-5">
        Welcome to Mallik's URL Shortify Hub
      </h2>
      <UrlShortner />
      {!isUserAuth && (
        <Alert
          variant="info"
          style={{
            width: "55%",
            margin: "0 auto",
            marginTop: "60px",
            marginBottom: "10px",
          }}
        >
          Please log in to the website in order to make the best use of it and
          to see your previously shortened URLs.
        </Alert>
      )}
    </>
  );
};

export default Home;
