import {useState} from "react";

function index() {
  const [omega, setOmega] = useState(true);

  return (
    <>
      <h2>Clone State</h2>
      <button onClick={e => setOmega(!omega)}>{omega ? "Omega" : "Alpha"}</button>
    </>
  );
}

export default index
