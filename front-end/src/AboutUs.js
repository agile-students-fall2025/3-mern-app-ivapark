import React, { useEffect, useState } from "react";
import axios from "axios";

function AboutUs() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("/api/about").then((res) => setAbout(res.data));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>About Us</h1>
      <img
        src={about.photo}
        alt={about.name}
        style={{ width: "200px", borderRadius: "10px" }}
      />
      <h2>{about.name}</h2>
      <p>{about.bio}</p>
    </div>
  );
}

export default AboutUs;
