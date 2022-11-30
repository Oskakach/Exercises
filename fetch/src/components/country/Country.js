import React from "react";

export const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className="country">
      <div className="country_flag">
        <img
          style={{ width: "300px", height: "300px" }}
          src={flag}
          alt={name}
        />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div className="country_text">
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  );
};
