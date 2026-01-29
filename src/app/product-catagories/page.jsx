"use client";
import React, { useState } from "react";
import Product from "@/components/Product";

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

  // Categories Data
  const clusters = [
    "Agriculture",
    "Livestock",
    "Fisheries",
    "Forestry",
    "Agro-processing",
  ];

  const valueChains = [
    "Maize Value Chain",
    "Rice Value Chain",
    "Coffee Value Chain",
    "Tea Value Chain",
    "Horticulture Value Chain",
    "Dairy Value Chain",
    "Meat Value Chain",
    "Aquaculture Value Chain",
  ];

  const products = [
    "Maize",
    "Rice",
    "Coffee",
    "Tea",
    "Irish Potatoes",
    "Cassava",
    "Beans",
    "Bananas",
    "Vegetables",
    "Fruits",
    "Milk",
    "Meat",
    "Fish",
  ];

  // Location Data
  const provinces = [
    "Kigali City",
    "Eastern Province",
    "Northern Province",
    "Southern Province",
    "Western Province",
  ];

  const districts = {
    "Kigali City": ["Gasabo", "Kicukiro", "Nyarugenge"],
    "Eastern Province": [
      "Bugesera",
      "Gatsibo",
      "Kayonza",
      "Kirehe",
      "Ngoma",
      "Nyagatare",
      "Rwamagana",
    ],
    "Northern Province": ["Burera", "Gakenke", "Gicumbi", "Musanze", "Rulindo"],
    "Southern Province": [
      "Gisagara",
      "Huye",
      "Kamonyi",
      "Muhanga",
      "Nyamagabe",
      "Nyanza",
      "Nyaruguru",
      "Ruhango",
    ],
    "Western Province": [
      "Karongi",
      "Ngororero",
      "Nyabihu",
      "Nyamasheke",
      "Rubavu",
      "Rusizi",
      "Rutsiro",
    ],
  };

  const sectors = [
    "Kacyiru",
    "Kimironko",
    "Remera",
    "Nyamirambo",
    "Nyarugenge",
    "Kicukiro",
    "Kanombe",
    "Gikondo",
    "Gisozi",
    "Kibagabaga",
  ];

  const cells = [
    "Agatare",
    "Gahanga",
    "Kabuga",
    "Kagugu",
    "Kibagabaga",
    "Kimihurura",
    "Niboye",
    "Rugando",
    "Nyabisindu",
    "Rebero",
  ];

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

  const availableDistricts = filters.province
    ? districts[filters.province] || []
    : [];

  return (
    <div className="grid grid-cols-4 ">
      <div className="min-h-screen  flex items-center justify-center p-8">
        <div className="w-full max-w-[320px] bg-gradient-to-b from-amber-50 to-yellow-50 rounded-xl shadow-lg p-6 border border-amber-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

          <div className="space-y-3">
            {/* Categories Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Categories
              </h3>

              {/* Cluster */}
              <div className="mb-2">
                <label className="block text-xs text-gray-600 mb-1">
                  Cluster
                </label>
                <select
                  value={filters.cluster}
                  onChange={(e) =>
                    handleFilterChange("cluster", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
                >
                  <option value=""></option>
                  {clusters.map((cluster) => (
                    <option key={cluster} value={cluster}>
                      {cluster}
                    </option>
                  ))}
                </select>
              </div>

              {/* Value Chain */}
              <div className="mb-2">
                <label className="block text-xs text-gray-600 mb-1">
                  Value Chain
                </label>
                <select
                  value={filters.valueChain}
                  onChange={(e) =>
                    handleFilterChange("valueChain", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
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
              <div className="mb-3">
                <label className="block text-xs text-gray-600 mb-1">
                  Product
                </label>
                <select
                  value={filters.product}
                  onChange={(e) =>
                    handleFilterChange("product", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
                >
                  <option value=""></option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Location
              </h3>

              {/* Province */}
              <div className="mb-2">
                <label className="block text-xs text-gray-600 mb-1">
                  Province
                </label>
                <select
                  value={filters.province}
                  onChange={(e) =>
                    handleFilterChange("province", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
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
              <div className="mb-2">
                <label className="block text-xs text-gray-600 mb-1">
                  District
                </label>
                <select
                  value={filters.district}
                  onChange={(e) =>
                    handleFilterChange("district", e.target.value)
                  }
                  disabled={!filters.province}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="mb-2">
                <label className="block text-xs text-gray-600 mb-1">
                  Sector
                </label>
                <select
                  value={filters.sector}
                  onChange={(e) => handleFilterChange("sector", e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
                >
                  <option value=""></option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cell */}
              <div className="mb-3">
                <label className="block text-xs text-gray-600 mb-1">Cell</label>
                <select
                  value={filters.cell}
                  onChange={(e) => handleFilterChange("cell", e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-teal-700"
                >
                  <option value=""></option>
                  {cells.map((cell) => (
                    <option key={cell} value={cell}>
                      {cell}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            <button
              onClick={clearFilters}
              className="w-full mt-2 px-4 py-2.5 bg-teal-800 text-white text-sm font-medium rounded hover:bg-teal-900 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <Product />
    </div>
  );
};

export default page;
