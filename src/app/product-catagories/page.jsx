"use client";
import React, { useState, useMemo } from "react";
import { ProductData } from "../../../lib/ProductData";

const page = () => {
  const [filters, setFilters] = useState({
    cluster: "",
    valueChain: "",
    product: "",
    province: "",
    district: "",
    sector: "",
    cell: "",
  });

  // Extract unique values from ProductData
  const uniqueData = useMemo(() => {
    const clusters = [
      ...new Set(ProductData.map((p) => p.classification.cluster)),
    ].sort();
    const districts = [
      ...new Set(ProductData.map((p) => p.location.district)),
    ].sort();
    const sectors = [
      ...new Set(ProductData.map((p) => p.location.sector)),
    ].sort();
    const products = [
      ...new Set(ProductData.map((p) => p.product_name)),
    ].sort();
    const companies = [
      ...new Set(ProductData.map((p) => p.company_name)),
    ].sort();

    return { clusters, districts, sectors, products, companies };
  }, []);

  // Map districts to provinces (Rwanda's administrative structure)
  const districtToProvince = {
    Gasabo: "Kigali City",
    Kicukiro: "Kigali City",
    Nyarugenge: "Kigali City",
    Rulindo: "Northern Province",
    Musanze: "Northern Province",
    Nyabihu: "Western Province",
  };

  const provinces = [...new Set(Object.values(districtToProvince))].sort();

  // Value chains (derived from sectors)
  const valueChains = [
    "Dairy Value Chain",
    "Manufacturing Value Chain",
    "Beverage Value Chain",
    "Food Processing Value Chain",
  ];

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return ProductData.filter((product) => {
      // Cluster filter
      if (
        filters.cluster &&
        product.classification.cluster !== filters.cluster
      ) {
        return false;
      }

      // District filter
      if (filters.district && product.location.district !== filters.district) {
        return false;
      }

      // Sector filter
      if (filters.sector && product.location.sector !== filters.sector) {
        return false;
      }

      // Product name filter
      if (filters.product && product.product_name !== filters.product) {
        return false;
      }

      // Province filter (check if product's district belongs to selected province)
      if (filters.province) {
        const productProvince = districtToProvince[product.location.district];
        if (productProvince !== filters.province) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
      // Reset district when province changes
      ...(filterName === "province" && { district: "" }),
    }));
  };

  const clearFilters = () => {
    setFilters({
      cluster: "",
      valueChain: "",
      product: "",
      province: "",
      district: "",
      sector: "",
      cell: "",
    });
  };

  // Get available districts based on selected province
  const availableDistricts = useMemo(() => {
    if (!filters.province) return uniqueData.districts;

    return uniqueData.districts.filter(
      (district) => districtToProvince[district] === filters.province,
    );
  }, [filters.province, uniqueData.districts]);

  return (
    <div className="min-h-screen bg-gradient-to-br  flex items-start p-4 gap-4 mx-4">
      {/* Filter Panel */}
      <div className="w-60 bg-gradient-to-b from-amber-50 to-yellow-50 rounded-lg shadow-lg p-5 border border-amber-200 sticky top-4 flex-shrink-0">
        <h2 className="text-base font-bold text-gray-800 mb-3">Filters</h2>

        <div className="space-y-2">
          {/* Categories Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-700 mb-1.5">
              Categories
            </h3>

            {/* Cluster */}
            <div className="mb-1.5">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                Cluster
              </label>
              <select
                value={filters.cluster}
                onChange={(e) => handleFilterChange("cluster", e.target.value)}
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                {uniqueData.clusters.map((cluster) => (
                  <option key={cluster} value={cluster}>
                    {cluster}
                  </option>
                ))}
              </select>
            </div>

            {/* Value Chain */}
            <div className="mb-1.5">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                Value Chain
              </label>
              <select
                value={filters.valueChain}
                onChange={(e) =>
                  handleFilterChange("valueChain", e.target.value)
                }
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                {valueChains.map((chain) => (
                  <option key={chain} value={chain}>
                    {chain}
                  </option>
                ))}
              </select>
            </div>

            {/* Product */}
            <div className="mb-2">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                Product
              </label>
              <select
                value={filters.product}
                onChange={(e) => handleFilterChange("product", e.target.value)}
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                {uniqueData.products.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-700 mb-1.5">
              Location
            </h3>

            {/* Province */}
            <div className="mb-1.5">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                Province
              </label>
              <select
                value={filters.province}
                onChange={(e) => handleFilterChange("province", e.target.value)}
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="mb-1.5">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                District
              </label>
              <select
                value={filters.district}
                onChange={(e) => handleFilterChange("district", e.target.value)}
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                {availableDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Sector */}
            <div className="mb-1.5">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                Sector
              </label>
              <select
                value={filters.sector}
                onChange={(e) => handleFilterChange("sector", e.target.value)}
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                {uniqueData.sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            {/* Cell */}
            <div className="mb-2">
              <label className="block text-[10px] text-gray-600 mb-0.5">
                Cell
              </label>
              <select
                value={filters.cell}
                onChange={(e) => handleFilterChange("cell", e.target.value)}
                className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
              >
                <option value=""></option>
                <option value="Agatare">Agatare</option>
                <option value="Gahanga">Gahanga</option>
                <option value="Kabuga">Kabuga</option>
                <option value="Kagugu">Kagugu</option>
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="w-full mt-2 px-3 py-1.5 bg-teal-800 text-white text-[11px] font-medium rounded hover:bg-teal-900 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Products Display Area */}
      <div className="flex-1">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between flex-col text-center space-y-2 border border-primary rounded-3xl shadow shadow-teal-700 p-5 transform transition duration-300 ease-in-out hover:scale-105 bg-accent"
            >
              <div className="flex justify-center items-center">
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="w-65 h-40  border border-primary rounded-2xl object-contain bg-white"
               
                />
              </div>
              <h2 className="font-semibold text-lg my-1">
                {product.product_name}
              </h2>
              <p className="text-sm text-gray-600">{product.company_name}</p>

              <a
                href={`/product/${product.slug}`}
                className="bg-primary p-2 w-full rounded-2xl text-sm text-white hover:bg-primary  transition-colors cursor-pointer inline-block"
              >
                <button className="w-full">View More</button>
              </a>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-5xl mb-3">🔍</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              No products found
            </h3>
            <p className="text-sm text-gray-600">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
