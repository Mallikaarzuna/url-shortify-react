import { useEffect, useState } from "react";
import UrlBox from "../UrlBox/UrlBox";
import UrlTable from "../UrlTable/UrlTable";
import { useNavigate } from "react-router-dom";

const UrlShortner = () => {
  //const [textToCopy, setTextToCopy] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const [urlData, setUrlData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUrlData = async () => {
      try {
        const response = await fetch("/api/urlData");
        // const response = await fetch(
        //   "https://url-shortify-node.onrender.com/api/urlData"
        // );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUrlData(data);
      } catch (error) {
        // console.error("Error fetching URL data:", error);
        navigate("/login");
      }
    };

    fetchUrlData();
  }, [navigate]);

  // const urlData = [
  //   {
  //     shortUrl: "https://short.url/abc",
  //     longUrl: "https://www.example.com/long-url-1",
  //     clicks: 10,
  //   },
  //   // Add more data objects as needed
  // ];

  // const copyTextHandler = (value) => {
  //   setTextToCopy(value);
  //   setShortUrl(value);
  // };

  const copyButtonClickHandler = () => {
    // Copy text to clipboard

    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        console.log("Text successfully copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

  const longUrlHandler = (value) => {
    setLongUrl(value);
  };

  const submitButtonClickHandler = async () => {
    console.log(longUrl);
    try {
      const response = await fetch("http://localhost:3000/api/shortUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Shortened URL:", result.shortUrl);
        setShortUrl(result.shortUrl);
      } else {
        console.error("Failed to shorten URL");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <UrlBox
        //copyTextHandler={copyTextHandler}
        copyButtonClickHandler={copyButtonClickHandler}
        submitButtonClickHandler={submitButtonClickHandler}
        longUrlHandler={longUrlHandler}
        shortUrl={shortUrl}
      />
      <UrlTable data={urlData} />
    </>
  );
};
export default UrlShortner;
