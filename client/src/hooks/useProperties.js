import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const useProperties = (filters) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProperties = useCallback(debounce(async (filters) => {
    try {
      setLoading(true);
      const { city, type, category, sort, search } = filters;
      const params = new URLSearchParams();
      
      if (city) params.append('city', city);
      if (type) params.append('type', type);
      if (category) params.append('category', category);
      if (sort) params.append('sort', sort);
      if (search) params.append('search', search);
      
      const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/list?${params.toString()}`);
      setProperties(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }, 500), []);

  useEffect(() => {
    fetchProperties(filters);
    
    return () => fetchProperties.cancel();
  }, [filters, fetchProperties]);

  return { properties, loading, error };
};

export default useProperties;