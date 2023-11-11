import React, { useState } from "react";

function RandomImage() {
  const [src, setSrc] = useState("");
  const getImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setSrc(data.message);
    } catch (error) {
      console.error("ERROR ", error);
    }
  };
  return (
    <div>
      {" "}
      <div>
        {" "}
        <button onClick={(e) => getImage()}>Get Random Image</button>
      </div>
      <div>
        <img src={src} alt="image" />
      </div>
    </div>
  );
}

export default RandomImage;
