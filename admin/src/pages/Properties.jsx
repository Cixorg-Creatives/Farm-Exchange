import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import PropertiesHero from '@/components/properties/PropertiesHero';
import PropertiesList from '@/components/properties/PropertiesList';

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <PropertiesHero
        onSearch={setSearchQuery}
        onStatusFilter={setStatusFilter}
      />
      <PropertiesList
        searchQuery={searchQuery}
        statusFilter={statusFilter}
      />
    </div>
  );
};

export default Properties;