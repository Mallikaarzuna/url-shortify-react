/* eslint-disable react/prop-types */
import styles from "./UrlTable.module.css";

const UrlTable = ({ data }) => {
  // If 'data' is not passed, render an empty array
  const dataArray = data || [];
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
            <td>{item.shortUrl}</td>
            <td>{item.longUrl}</td>
            <td>{item.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UrlTable;
