import React from "react";

const Heading = ({ heading, subHeading }) => {
  return (
    <div className="max-w-6xl mx-auto text-center px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
        {heading}
      </h2>

      {subHeading && (
        <p className="my-4 text-sm sm:text-base md:text-lg max-w-6xl mx-auto">
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Heading;
