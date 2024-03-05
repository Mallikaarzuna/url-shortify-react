import { useEffect, useState } from "react";
import UrlTable from "../components/UrlTable/UrlTable";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [urlData, setUrlData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUrlData = async () => {
      try {
        //const response = await fetch("/api/userUrlData");
        const response = await fetch("/api/urlData");

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

  return (
    <div>
      <h2>List of URLs</h2>
      <UrlTable data={urlData} />
    </div>
  );
};
export default List;
