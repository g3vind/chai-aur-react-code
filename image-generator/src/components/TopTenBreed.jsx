import React, { useState } from "react";

function TopTenBreed() {
  const [breedList, setBreedList] = useState([]);
  const getAllBreed = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const data = await response.json();
      const breeds = Object.keys(data.message).slice(0, 10);
      setBreedList(breeds);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <button onClick={(e) => getAllBreed()}>Top 10 Breed</button>
        <ul>
          {breedList.map((breed, index) => (
            <li key={index}>{breed}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopTenBreed;
