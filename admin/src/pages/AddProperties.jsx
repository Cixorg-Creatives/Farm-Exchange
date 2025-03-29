import { assets } from '@/assets/assets';
import Button from '@/components/Button';
import Select from '@/components/Select';
import { IndianRupee } from 'lucide-react';
import React, { useState, useRef } from 'react';

const AddProperties = () => {
  const [availabilityStatus, setAvailabilityStatus] = useState("Select");
  const [type, setType] = useState("Select");
  const [category, setCategory] = useState("Select");
  const [priceUnit, setPriceUnit] = useState("lakh");
  const [areaUnit, setAreaUnit] = useState("ft");
  const [banner, setBanner] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [amenities, setAmenities] = useState([{ image: null, name: '' }]);
  const textareaRef = useRef(null);

  const availabilitySelect = [
    { value: "available", label: "Available" },
    { value: "not-available", label: "Not Available" },
  ];

  const typeSelect = [
    { value: "farmland", label: "Farm Land" },
    { value: "farmhouse", label: "Farm House" },
    { value: "agricultureland", label: "Agriculture Land" },
    { value: "coffee", label: "Coffee Estate" },
  ];

  const categorySelect = [
    { value: "elite", label: "Elite Properties" },
    { value: "featured", label: "Featured Properties" },
  ];

  const priceUnitSelect = [
    { value: "lakh", label: "lakh" },
    { value: "crore", label: "cr" },
  ];

  const areaUnitSelect = [
    { value: "ft", label: "Sq. Ft" },
    { value: "acre", label: "Acres" },
  ];

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBanner(imageUrl);
    }
  };

  const handleGalleryUpload = (event) => {
    const files = event.target.files;
    if (files.length) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setGallery((prevGallery) => [...prevGallery, ...newImages]);
    }
  };

  const handleAddAmenity = () => {
    setAmenities([...amenities, { image: null, name: '' }]);
  };

  const handleAmenityImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedAmenities = [...amenities];
      updatedAmenities[index].image = imageUrl;
      setAmenities(updatedAmenities);
    }
  };

  const handleAmenityNameChange = (index, event) => {
    const updatedAmenities = [...amenities];
    updatedAmenities[index].name = event.target.value;
    setAmenities(updatedAmenities);
  };

  const handleTextareaLength = (e) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <div className='px-5 md:px-8 lg:px-12 mb-2 md:mb-4 xl:mb-6'>
      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 lg:gap-4'>
        <div className="col-span-3 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Name of property
          </label>
          <input
            type="text"
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
            placeholder="Property Name"
          />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Availability Status
          </label>
          <Select options={availabilitySelect} onSelect={setAvailabilityStatus} selectedOption={availabilityStatus} />
        </div>
        <div className="col-span-1 row-span-2 w-full h-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Property Banner
          </label>
          <div className="relative hover:opacity-80 rounded-md md:rounded-lg">
            <label
              htmlFor="uploadBanner"
              className="cursor-pointer flex justify-center items-center"
            >
              <img
                src={banner ? banner : assets.upload}
                className="w-full h-auto object-cover rounded-md md:rounded-lg aspect-3/2]"
              />
            </label>
            <input
              id="uploadBanner"
              type="file"
              accept=".png, .jpg, .jpeg"
              className="hidden"
              onChange={handleBannerUpload}
            />
          </div>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Property Type
          </label>
          <Select options={typeSelect} onSelect={setType} selectedOption={type} />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Category
          </label>
          <Select options={categorySelect} onSelect={setCategory} selectedOption={category} />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Propery Price
          </label>
          <div className='flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg'>
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full ml-1 md:ml-2 lg:ml-4">
              <IndianRupee className="h-4 md:h-5 lg:h-6 w-auto text-black" />
              <input
                className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base py-2 md:py-3 lg:py-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                placeholder="0.00"
              />
            </div>
            <Select options={priceUnitSelect} onSelect={setPriceUnit} selectedOption={priceUnit} />
          </div>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Price per Land Area
          </label>
          <div className='flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg'>
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full ml-1 md:ml-2 lg:ml-4">
              <IndianRupee className="h-4 md:h-5 lg:h-6 w-auto text-black" />
              <input
                className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base py-2 md:py-3 lg:py-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                placeholder="0.00"
              />
            </div>
            <Select options={priceUnitSelect} onSelect={setPriceUnit} selectedOption={priceUnit} />
          </div>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Plot Area
          </label>
          <div className='flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg'>
            <input
              className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
              placeholder="0.00"
            />
            <Select options={areaUnitSelect} onSelect={setAreaUnit} selectedOption={areaUnit} />
          </div>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Total Project Area
          </label>
          <div className='flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg'>
            <input
              className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
              placeholder="0.00"
            />
            <Select options={areaUnitSelect} onSelect={setAreaUnit} selectedOption={areaUnit} />
          </div>
        </div>
        <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Property Small Description
          </label>
          <textarea
            ref={textareaRef}
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-auto min-h-[40px] md:min-h-[48px] lg:min-h-[56px] rounded-md lg:rounded-lg outline-none resize-none"
            placeholder="Property Description"
            onInput={handleTextareaLength}
          />
        </div>
        <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Project Small Description
          </label>
          <textarea
            ref={textareaRef}
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-auto min-h-[40px] md:min-h-[48px] lg:min-h-[56px] rounded-md lg:rounded-lg outline-none resize-none"
            placeholder="Property Small Description"
            onInput={handleTextareaLength}
          />
        </div>
        <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Project About
          </label>
          <textarea
            ref={textareaRef}
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-auto min-h-[40px] md:min-h-[48px] lg:min-h-[56px] rounded-md lg:rounded-lg outline-none resize-none"
            placeholder="Property About"
            onInput={handleTextareaLength}
          />
        </div>
        <div className="col-span-4 row-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Gallery Images
          </label>
          <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 lg:gap-4 w-full">
            {gallery.map((image, index) => (
              <img key={index} src={image} className="col-span-1 h-auto object-cover rounded-md aspect-3/2" alt="Gallery" />
            ))}
          </div>
          <div className="relative hover:opacity-80 rounded-md md:rounded-lg mt-2">
            <Button id="uploadGallery" title='Add' variant='secondary' onClick={() => document.getElementById("uploadGallery").click()} />
            <input
              id="uploadGallery"
              type="file"
              accept=".png, .jpg, .jpeg"
              className="hidden"
              multiple
              onChange={handleGalleryUpload}
            />
          </div>
        </div>
        <div className="col-span-4 w-full flex flex-col items-start gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Amenities
          </label>
          <div className='grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 lg:gap-4'>
            {amenities.map((amenity, index) => (
              <div key={index} className="col-span-1 flex flex-col gap-1 md:gap-2 lg:gap-3 w-full">
                <div className="relative">
                  <label htmlFor={`uploadAmenity${index}`} className="cursor-pointer">
                    <img src={amenity.image || assets.upload} className="w-full h-auto aspect-3/2 object-cover rounded-md lg:rounded-lg" alt="Amenity" />
                  </label>
                  <input
                    id={`uploadAmenity${index}`}
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                    onChange={(event) => handleAmenityImageUpload(index, event)}
                  />
                </div>
                <input
                  type="text"
                  className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
                  placeholder="Amenity Name"
                />
              </div>
            ))}
          </div>
          <Button title='Add' variant='secondary' onClick={handleAddAmenity} />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Locality
          </label>
          <input
            type="text"
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
            placeholder="Locality"
          />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            City
          </label>
          <input
            type="text"
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
            placeholder="City"
          />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            State
          </label>
          <input
            type="text"
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
            placeholder="State"
          />
        </div>
        <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Pin Code
          </label>
          <input
            type="text"
            className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
            placeholder="Pin Code"
          />
        </div>
        <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
          <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
            Loaction
          </label>
          {/* Map Location Here */}
        </div>
        <div className="col-span-4 flex w-full items-center justify-end gap-2 md:gap-4 lg:gap-6">
          <Button title='Add to Properties' variant="secondary"/>
          <Button title='Save to Draft' variant="destructive"/>
        </div>
      </div>
    </div>
  );
};

export default AddProperties;