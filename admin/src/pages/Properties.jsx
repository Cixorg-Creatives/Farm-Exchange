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
      <div className='flex items-center justify-between gap-2 md:gap-3 lg:gap-4 mb-4'>
        <h1 className="text-2xl font-bold">Properties Management</h1>
        <Link to={'/properties/add-property'}>
          <Button 
            title={'Add Property'} 
            variant='primary' 
            icon={'show'} 
            symbol={'plus'} 
          />
        </Link>
      </div>
      
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