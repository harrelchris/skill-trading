import React, { useEffect, useState } from "react";
import ISKTable from "./ISKTable";

function Index() {
  const [biologyLevel, setBiologyLevel] = useState(5);
  const [isOmega, setIsOmega] = useState(true);

  return (
    <>
      <h1>Index</h1>
      <button onClick={e => setIsOmega(!isOmega)}>{isOmega ? "Omega" : "Alpha"}</button>
      <ISKTable />
    </>
  );
}

export default Index;
