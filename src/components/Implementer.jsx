import React from "react";
import Image from "next/image";
import Heading from "./Heading";

function Implementer() {
  return (
    <div className="my-8 max-w-7xl mx-auto">
      <Heading heading="Implementer" />

      <Image
        src="/implementers.png"
        alt="image"
        width={1500}
        height={50}
        draggable={false}
        className="mix-blend-multiply my-15"
      />
    </div>
  );
}

export default Implementer;
