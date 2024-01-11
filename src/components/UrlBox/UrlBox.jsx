/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

const UrlBox = ({
  //copyTextHandler,
  copyButtonClickHandler,
  submitButtonClickHandler,
  longUrlHandler,
  shortUrl,
}) => {
  return (
    <>
      <h4>Paste the URL to be shortened</h4>
      <div className="my-3">
        <input
          type="text"
          onChange={(e) => longUrlHandler(e.target.value)}
          className="mx-2"
          style={{ width: "500px" }}
        />
        <Button variant="primary" onClick={submitButtonClickHandler}>
          Submit
        </Button>
      </div>
      <div className="mb-3">
        <input
          type="text"
          value={shortUrl}
          //onChange={(e) => copyTextHandler(e.target.value)}
          style={{ width: "300px" }}
          disabled
          className="mx-2"
        />
        <Button variant="warning" onClick={copyButtonClickHandler}>
          Copy URL
        </Button>
      </div>
    </>
  );
};
export default UrlBox;
