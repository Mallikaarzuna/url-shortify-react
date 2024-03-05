/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./UrlTable.module.css";
import { UrlContext } from "../../contexts/UrlContext";

const UrlTable = ({ data }) => {
  // If 'data' is not passed, render an empty array
  const dataArray = data || [];

  const { frontendBaseUrl } = useContext(UrlContext);
  // const [frontendBaseUrl, setFrontendBaseUrl] = useState("");

  // useEffect(() => {
  //   // Get the frontend base URL
  //   const getFrontendBaseUrl = () => {
  //     const { protocol, host } = window.location;
  //     const frontendUrl = `${protocol}//${host}`;
  //     setFrontendBaseUrl(frontendUrl);
  //   };

  //   getFrontendBaseUrl();
  // }, []);

  // Function to generate a short URL by appending it to the frontend base URL
  const generateShortUrl = (shortCode) => {
    return `${frontendBaseUrl}/${shortCode}`;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Short URL</th>
          <th>Long URL</th>
          <th>Short URL Clicks</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {/* <td>{item.shortUrl}</td> */}
            <td>
              {/* Generate the short URL dynamically */}
              <a href={generateShortUrl(item.shortUrl)}>
                {generateShortUrl(item.shortUrl)}
              </a>
            </td>
            <td>{item.longUrl}</td>
            <td>{item.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UrlTable;
