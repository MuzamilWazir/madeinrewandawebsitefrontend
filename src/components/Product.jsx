import React from "react";
import { ProductData } from "../../lib/ProductData";
import Image from "next/image";
import Link from "next/link";
function Product() {
  return (
    <div className="grid grid-cols-4 gap-3 my-5">
      {ProductData.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between flex-col text-center space-y-2 border border-primary rounded-3xl shadow shadow-primary p-5"
        >
          <div className="flex justify-center items-center ">
            <Image
              src={data.image_url}
              alt="Product Image"
              width={100}
              height={100}
              className=" w-65 h-40   border border-primary rounded-2xl "
            />
          </div>
          <h2 className="font-semibold mx-8 text-xl my-1">
            {data.product_name}
          </h2>
          <p>{data.company_name}</p>

          <Link href={`/product/${data.slug}`} className="bg-primary p-2 w-full rounded-2xl text-sm mx-2 text-white">
          <button >
            View More
          </button>
          </Link>
          
        </div>
      ))}
    </div>
  );
}

export default Product;
