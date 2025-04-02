import { assets } from "@/assets/assets";
import { useState, useEffect } from "react";
import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertiesList from "@/components/properties/PropertiesList";
import useProperties from "../hooks/useProperties";
import React from "react";
import { useLocation } from "react-router-dom";

const Properties = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialType = searchParams.get('type') || 'all';
    const initialCategory = searchParams.get('category') || 'all';
  
    const [filters, setFilters] = useState({
      city: 'all',
      type: initialType,
      category: initialCategory,
      sort: 'latest',
      search: ''
    });
  
    const { properties, loading } = useProperties(filters);
  
    const handleFilterChange = (newFilters) => {
      setFilters(prev => ({
        ...prev,
        ...newFilters
      }));
    };

  return (
    <div className="px-4 md:px-6 lg:px-24 relative">
      <PropertiesHero filters={filters} onFilterChange={handleFilterChange} />
      <PropertiesList properties={properties} loading={loading} />
    </div>
  );
};

export default Properties;
