import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShortUrlRedirect = () => {
  const { shortCode } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const redirectToLongUrl = async () => {
      window.location.href = `/api/redirect/${shortCode}`;
      //   try {
      //     await axios.get(`/api/redirect/${shortCode}`);
      //   } catch (error) {
      //     setError("Error redirecting to long URL");
      //     console.error(error);
      //   }
    };

    redirectToLongUrl();
  }, [shortCode]);

  return (
    <div>{error ? <p>{error}</p> : <p>Redirecting to the long URL...</p>}</div>
  );
};

export default ShortUrlRedirect;
