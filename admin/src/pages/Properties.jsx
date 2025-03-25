import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import PropertiesHero from '@/components/properties/PropertiesHero';
import PropertiesList from '@/components/properties/PropertiesList';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

const citySchema = z.object({
  cityName: z.string().min(1, 'City name is required'),
});

const Properties = () => {
  const [showAddCity, setShowAddCity] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(citySchema),
  });

  const onSubmit = (data) => {
    console.log("City Added:", data.cityName);
    reset();
    setShowAddCity(false)
  };

  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <div className='flex items-center gap-2 md:gap-3 lg:gap-4'>
        <Link to={'/properties/add-property'}>
          <Button title={'Add Properties'} variant='primary' icon={'show'} symbol={''} />
        </Link>
        <Button title={'Add City'} variant='primary' icon={'show'} symbol={''} onClick={() => setShowAddCity(true)} />
      </div>
      {showAddCity && (
        <div className='z-2 w-screen h-screen fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4'>
          <div className='bg-[#F6FCDF] px-4 py-5 border border-[#D9E1C3] max-w-lg w-full flex flex-col items-start gap-2 rounded-md shadow-2xl shadow-[#D9E1C3]'
            onClick={(e) => e.stopPropagation()}>
            <p className='boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle'>Add City</p>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
              <div className='flex flex-col items-start gap-2 w-full'>
                <label className='text-black capitalize font-normal text-xs md:text-base lg:text-xl'>City Name</label>
                <input
                  {...register("cityName")}
                  type='text'
                  className='w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg'
                  placeholder='Enter city name'
                />
              </div>
              <div className='mt-3 flex gap-2'>
                <Button type='busubmittton' title={'Save'} variant='primary' />
                <Button type='button' title={'Cancel'} variant='destructive' onClick={() => setShowAddCity(false)} />
              </div>
            </form>
          </div>
        </div>
      )}

      <PropertiesHero />
      <PropertiesList />
    </div>
  );
};

export default Properties;