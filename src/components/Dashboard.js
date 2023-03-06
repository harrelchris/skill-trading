import React from "react";

function Dashboard() {
  const name = localStorage.getItem("name")
  const portraitURL = `https://images.evetech.net/characters/${localStorage.getItem("id")}/portrait?tenant=tranquility&size=128`;

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome, {name}</p>
      <img src={portraitURL} alt={name}/>
    </>
  );
}

export default Dashboard;
