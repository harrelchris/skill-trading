import React, {useEffect} from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <>
      <h1>Not Found</h1>
      <p>The page you requested does not exist.</p>
    </>
  );
}

export default NotFound;
