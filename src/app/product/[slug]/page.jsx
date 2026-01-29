import Product from "@/components/Product";
import React from "react";
import { ProductData } from "../../../../lib/ProductData";
import { PiBuildingsBold } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CheeseCard = ({ product }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#0d2e24] text-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-105">
        <div className="bg-white p-6 rounded-xl m-6 flex items-center justify-center w-[calc(100%-3rem)] md:w-95 h-95 md:h-92 shrink-0 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={product.image_url}
              alt={product.product_name}
              className="max-w-70 max-h-70 w-auto h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 pt-0 md:pt-6 md:pr-8 justify-between min-w-0">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e1d7b7] line-clamp-2">
              {product.product_name}
            </h2>

            <div className="space-y-1.5 grid grid-cols-2 text-sm text-[#e1d7b7]">
              <p className="truncate">
                <span className="font-semibold text-white">
                  <PiBuildingsBold className="inline text-xl text-accent" />
                </span>{" "}
                {product.company_name}
              </p>
              <p className="truncate">
                <span className="font-semibold text-white">
                  <MdLocationPin className="inline text-xl text-accent" />
                </span>{" "}
                {product.location.district}
              </p>
              <p className="truncate">
                <span className="font-semibold text-white">
                  <FaPhoneAlt className="inline text-xl text-accent" />
                </span>{" "}
                {product.contact.phone}
              </p>
              <p className="truncate">
                <span className="font-semibold text-white">
                  <MdEmail className="inline text-xl text-accent" />
                </span>{" "}
                {product.contact.email}
              </p>
              <p className="truncate">
                <span className="font-semibold text-white">Cluster:</span>{" "}
                {product.classification.cluster}
              </p>
              <p className="truncate">
                <span className="font-semibold text-white">Sector:</span>{" "}
                {product.location.sector}
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-2 gap-6 pt-4 text-sm border-t border-[#1a4d3d] text-[#e1d7b7]">
              <div>
                <p className="uppercase tracking-wide font-bold text-white mb-1 text-xs">
                  Approval Date
                </p>
                <p className="truncate">{product.status_info.approval_date}</p>
              </div>
              <div>
                <p className="uppercase tracking-wide font-bold text-white mb-1 text-xs">
                  Expiry Date
                </p>
                <p className="truncate">{product.status_info.expiry_date}</p>
              </div>
            </div>

            <div className="inline-block bg-[#e1d7b7] px-4 py-2 rounded-lg text-[#0d2e24] font-bold text-xs uppercase">
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
        <h2 className="text-primary text-4xl font-bold">You May Also like</h2>
        <div>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default page;
