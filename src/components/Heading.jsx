import React from "react";

const Heading = ({ heading, subHeading }) => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-primary">{heading}</h2>

      {subHeading && <p className="my-5 mx-24 ">{subHeading}</p>}
    </div>
  );
};

export default Heading;
