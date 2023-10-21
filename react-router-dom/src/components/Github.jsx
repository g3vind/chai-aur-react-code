import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const loaderData = useLoaderData();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/g3vind")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from GitHub API:", error);
      });
  }, []);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const detailItemStyle = {
    margin: "10px 0",
  };

  const labelStyle = {
    color: "#333",
    fontWeight: "bold",
    marginRight: "10px",
  };

  return (
    <div className="text-center m-4">
      {userData ? (
        <div style={cardStyle}>
          <div style={imageContainerStyle}>
            <img
              style={{ borderRadius: "50%", padding: "10px" }}
              src={userData.avatar_url}
              alt="Git picture"
              width={300}
            />
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle} className="text-red-900">
              Github Username:
            </span>
            {userData.login}
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle} className="text-green-600">
              Github followers:
            </span>
            {userData.followers}
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle}>Name:</span>
            {userData.name}
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle}>Location:</span>
            {userData.location}
          </div>
          <div style={detailItemStyle}>
            <span style={labelStyle} className="text-blue-500">
              Bio:
            </span>
            {userData.bio}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/g3vind");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
