import Product from "@/components/Product";
import React from "react";
import { ProductData } from "../../../../lib/ProductData";

const CheeseCard = ({ product }) => {
  return (
    <div className="max-w-5xl mx-auto bg-[#0d2e24] text-white p-6 rounded-2xl flex flex-col md:flex-row gap-6 shadow-xl">
      {/* Image Container */}
      <div className="bg-white p-4 rounded-xl flex items-center justify-center w-full md:w-1/3">
        <img
          src={product.image_url}
          alt={product.product_name}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 space-y-2">
        <h2 className="text-2xl font-bold text-[#e1d7b7]">
          {product.product_name}
        </h2>
        
        <div className="space-y-1 text-sm text-accent">
          <p>
            <span className="font-semibold">Company Name:</span>{" "}
            {product.company_name}
          </p>
          <p>
            <span className="font-semibold">District:</span>{" "}
            {product.location.district}
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {product.contact.phone}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {product.contact.email}
          </p>
          <p>
            <span className="font-semibold">Cluster:</span>{" "}
            {product.classification.cluster}
          </p>
          <p>
            <span className="font-semibold">Sector:</span>{" "}
            {product.location.sector}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 text-xs border-t border-primary text-accent">
          <div>
            <p className="uppercase tracking-tighter font-bold">
              Approval Date
            </p>
            <p>{product.status_info.approval_date}</p>
          </div>
          <div>
            <p className="uppercase tracking-tighter font-bold">Expiry Date</p>
            <p>{product.status_info.expiry_date}</p>
          </div>
        </div>

        <div className="mt-4 inline-block bg-[#e1d7b7] px-3 py-1 rounded text-[#0d2e24] font-bold text-xs uppercase">
          Validity Status:{" "}
          <span
            className={`${
              product.status_info.validity_status === "Valid"
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {product.status_info.validity_status}
          </span>
        </div>
      </div>
    </div>
  );
};

async function page({ params }) {
  const { slug } = await params;
  const filteredData = ProductData.filter((item) => item.slug === slug);

  // Fixed: Check filteredData instead of product
  if (filteredData.length === 0) {
    return <div className="p-20 text-center">Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <div className="p-8 flex flex-col gap-6">
        {filteredData.map((item) => (
          <CheeseCard key={item.id} product={item} />
        ))}
      </div>
      
      <div>
        <h2 className="text-primary text-4xl font-bold">
          You May Also like
        </h2>
        <div>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default page;