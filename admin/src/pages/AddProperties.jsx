import { assets } from "@/assets/assets";
import generateURL from "@/common/aws";
import Button from "@/components/Button";
import Select from "@/components/Select";
import { IndianRupee } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const propertySchema = z
  .object({
    name: z.string().min(1, "Property name is required"),
    banner: z.string().min(1, "Banner image is required"),
  })
  .superRefine((data, ctx) => {
    if (data.status === "published") {
      const publishedSchema = z.object({
        availabilityStatus: z.enum(["available", "not-available"], {
          required_error: "Availability status is required",
          invalid_type_error: "Please select availability status",
        }),
        type: z.enum(["farmland", "farmhouse", "agricultureland", "organic"], {
          required_error: "Property type is required",
          invalid_type_error: "Please select property type",
        }),
        category: z.enum(["elite", "featured", "recommended"], {
          required_error: "Category is required",
          invalid_type_error: "Please select category",
        }),
        gallery: z
          .array(z.string().min(1, "Gallery image URL is required"))
          .min(1, "At least one gallery image is required"),
        price: z.object({
          value: z
            .number({
              required_error: "Price is required",
              invalid_type_error: "Price must be a number",
            })
            .positive("Price must be positive"),
          unit: z.enum(["lakh", "crore"], {
            required_error: "Price unit is required",
          }),
        }),
        pricePerArea: z.object({
          value: z.number().optional(),
          unit: z.enum(["lakh", "crore"]).optional(),
        }),
        plotArea: z.object({
          value: z.number().optional(),
          unit: z.enum(["ft", "acre"]).optional(),
        }),
        totalProjectArea: z.object({
          value: z.number().optional(),
          unit: z.enum(["ft", "acre"]).optional(),
        }),
        propertyDescription: z.string().optional(),
        projectDescription: z.string().optional(),
        projectAbout: z.string().optional(),
        amenities: z
          .array(
            z.object({
              name: z.string().min(1, "Amenity name is required"),
              image: z.string().min(1, "Amenity image is required"),
            })
          )
          .min(1, "At least one amenity is required"),
        location: z.object({
          locality: z.string().min(1, "Locality is required"),
          city: z.string().min(1, "City is required"),
          state: z.string().min(1, "State is required"),
          pinCode: z
            .string()
            .min(1, "Pin code is required")
            .regex(/^\d{6}$/, "Pin code must be 6 digits"),
          coordinates: z
            .tuple([z.number(), z.number()])
            .refine(([lon, lat]) => !isNaN(lon) && !isNaN(lat), {
              message: "Coordinates must be [longitude, latitude]",
            }),
        }),
        developer: z.object({
          name: z.string().min(1, "Developer name is required"),
          logo: z.string().min(1, "Developer logo is required"),
        }),
      });

      const result = publishedSchema.safeParse(data);
      if (!result.success) {
        result.error.errors.forEach((err) => {
          ctx.addIssue(err);
        });
      }
    }
  });

const AddProperties = () => {
  const { propertyId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    availabilityStatus: "",
    type: "",
    category: "",
    banner: null,
    gallery: [],
    price: { value: "", unit: "lakh" },
    pricePerArea: { value: "", unit: "ft" },
    plotArea: { value: "", unit: "ft" },
    totalProjectArea: { value: "", unit: "ft" },
    propertyDescription: "",
    projectDescription: "",
    projectAbout: "",
    amenities: [{ image: null, name: "" }],
    location: {
      locality: "",
      city: "",
      state: "",
      pinCode: "",
      coordinates: [0, 0],
    },
    developer: {
      name: "",
      logo: null,
    },
    status: "draft",
  });

  const [loading, setLoading] = useState(!!propertyId);
  const textareaRefs = useRef([]);

  const {
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: formData,
  });

  useEffect(() => {
    if (!propertyId) return;

    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_DOMAIN}/edit-properties/${propertyId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch property");
        }
        const data = await response.json();

        setFormData({
          name: data.data.name || "",
          availabilityStatus: data.data.availabilityStatus || "",
          type: data.data.type || "",
          category: data.data.category || "",
          banner: data.data.banner || null,
          gallery: data.data.gallery || [],
          price: {
            value: data.data.price?.value || "",
            unit: data.data.price?.unit || "lakh",
          },
          pricePerArea: {
            value: data.data.pricePerArea?.value || "",
            unit: data.data.pricePerArea?.unit || "lakh",
          },
          plotArea: {
            value: data.data.plotArea?.value || "",
            unit: data.data.plotArea?.unit || "ft",
          },
          totalProjectArea: {
            value: data.data.totalProjectArea?.value || "",
            unit: data.data.totalProjectArea?.unit || "ft",
          },
          propertyDescription: data.data.propertyDescription || "",
          projectDescription: data.data.projectDescription || "",
          projectAbout: data.data.projectAbout || "",
          amenities:
            data.data.amenities?.length > 0
              ? data.data.amenities
              : [{ image: null, name: "" }],
          location: {
            locality: data.data.location?.locality || "",
            city: data.data.location?.city || "",
            state: data.data.location?.state || "",
            pinCode: data.data.location?.pinCode || "",
            coordinates: data.data.location?.coordinates || [0, 0],
          },
          developer: {
            name: data.data.developer?.name || "",
            logo: data.data.developer?.logo || null,
          },
          status: data.data.status || "draft",
        });

        if (data.data.location?.coordinates?.length === 2) {
          setMarkerPosition({
            lng: data.data.location.coordinates[0],
            lat: data.data.location.coordinates[1]
          });
        }
      } catch (error) {
        console.error("Error fetching property:", error);
        toast.error("Failed to load property data");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const availabilitySelect = [
    { value: "", label: "Select" },
    { value: "available", label: "Available" },
    { value: "not-available", label: "Not Available" },
  ];

  const typeSelect = [
    { value: "", label: "Select" },
    { value: "farmland", label: "Farm Land" },
    { value: "farmhouse", label: "Farm House" },
    { value: "agricultureland", label: "Agriculture Land" },
    { value: "organic", label: "Organic Farms" },
  ];

  const categorySelect = [
    { value: "", label: "Select" },
    { value: "elite", label: "Elite Properties" },
    { value: "featured", label: "Featured Properties" },
    { value: "recommended", label: "Recommended Properties" },
  ];

  const priceUnitSelect = [
    { value: "lakh", label: "lakh" },
    { value: "crore", label: "cr" },
  ];

  const areaUnitSelect = [
    { value: "ft", label: "Sq. Ft" },
    { value: "acre", label: "Acres" },
  ];

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedInputChange = (parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  const handleBannerUpload = async (e) => {
    const image = e.target.files[0];
    if (image) {
      try {
        const url = await generateURL(image);
        setFormData((prev) => ({ ...prev, banner: url }));
        toast.success("Banner uploaded successfully");
      } catch (error) {
        toast.error("Failed to upload banner");
      }
    }
  };

  const handleGalleryUpload = async (e) => {
    const files = e.target.files;
    if (files.length) {
      try {
        const newImages = await Promise.all(
          Array.from(files).map((file) => generateURL(file))
        );
        setFormData((prev) => ({
          ...prev,
          gallery: [...prev.gallery, ...newImages],
        }));
        toast.success("Images added to gallery");
      } catch (error) {
        toast.error("Failed to upload gallery images");
      }
    }
  };

  const handleAmenityImageUpload = async (index, e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await generateURL(file);
        const updatedAmenities = [...formData.amenities];
        updatedAmenities[index].image = url;
        setFormData((prev) => ({ ...prev, amenities: updatedAmenities }));
        toast.success("Uploaded 👍");
      } catch (error) {
        toast.error("Failed to upload amenity image");
      }
    }
  };

  const handleDeveloperLogoUpload = async (e) => {
    const image = e.target.files[0];
    if (image) {
      try {
        const url = await generateURL(image);
        setFormData((prev) => ({
          ...prev,
          developer: {
            ...prev.developer,
            logo: url,
          },
        }));
        toast.success("Developer logo uploaded successfully");
      } catch (error) {
        toast.error("Failed to upload developer logo");
      }
    }
  };

  const handleAddAmenity = () => {
    setFormData((prev) => ({
      ...prev,
      amenities: [...prev.amenities, { image: null, name: "" }],
    }));
  };

  const handleAmenityNameChange = (index, e) => {
    const updatedAmenities = [...formData.amenities];
    updatedAmenities[index].name = e.target.value;
    setFormData((prev) => ({ ...prev, amenities: updatedAmenities }));
  };

  const handleRemoveAmenity = (index) => {
    if (formData.amenities.length > 1) {
      const updatedAmenities = formData.amenities.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, amenities: updatedAmenities }));
    }
  };

  const handleTextareaLength = (index) => {
    const textarea = textareaRefs.current[index];
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      availabilityStatus: "",
      type: "",
      category: "",
      banner: null,
      gallery: [],
      price: {
        value: "",
        unit: "lakh",
      },
      pricePerArea: {
        value: "",
        unit: "ft",
      },
      plotArea: {
        value: "",
        unit: "ft",
      },
      totalProjectArea: {
        value: "",
        unit: "ft",
      },
      propertyDescription: "",
      projectDescription: "",
      projectAbout: "",
      amenities: [
        {
          image: null,
          name: "",
        },
      ],
      location: {
        locality: "",
        city: "",
        state: "",
        pinCode: "",
        coordinates: [0, 0],
      },
      developer: {
        name: "",
        logo: null,
      },
      status: "draft",
    });

    if (textareaRefs.current) {
      textareaRefs.current.forEach((textarea) => {
        if (textarea) {
          textarea.style.height = "auto";
        }
      });
    }
  };

  const handleSubmit = async (e, status) => {
    e.preventDefault();

    try {
      const submissionData = {
        ...formData,
        status,
        developer: {
          name: formData.developer.name,
          logo: formData.developer.logo || null,
        },
        price: {
          value: parseFloat(formData.price.value) || 0,
          unit: formData.price.unit,
        },
        pricePerArea: {
          value: parseFloat(formData.pricePerArea.value) || 0,
          unit: formData.pricePerArea.unit,
        },
        plotArea: {
          value: parseFloat(formData.plotArea.value) || 0,
          unit: formData.plotArea.unit,
        },
        totalProjectArea: {
          value: parseFloat(formData.totalProjectArea.value) || 0,
          unit: formData.totalProjectArea.unit,
        },
        amenities: formData.amenities.map((amenity) => ({
          name: amenity.name,
          image: amenity.image || null,
        })),
        location: {
          ...formData.location,
          coordinates: formData.location.coordinates.map(Number),
        },
      };

      const result = propertySchema.safeParse(submissionData);

      if (!result.success) {
        clearErrors();

        const formattedErrors = {};
        result.error.errors.forEach((err) => {
          const path = err.path;
          if (path.length > 1) {
            if (!formattedErrors[path[0]]) {
              formattedErrors[path[0]] = {};
            }
            formattedErrors[path[0]][path[1]] = err.message;
          } else {
            formattedErrors[path[0]] = err.message;
          }
        });

        setError(formattedErrors);
        toast.error("Please fix the form errors");
        return;
      }

      const method = propertyId ? "PUT" : "POST";
      const url = propertyId
        ? `${import.meta.env.VITE_SERVER_DOMAIN}/edit-properties/${propertyId}`
        : `${import.meta.env.VITE_SERVER_DOMAIN}/properties`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit property");
      }

      toast.success(
        `Property ${
          status === "published" ? "published" : "saved as draft"
        } successfully!`
      );
      if (!propertyId) {
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to submit property");
    }
  };

  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: formData.location.coordinates[1] || 12.9716,
    lng: formData.location.coordinates[0] || 77.5946,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCYwUnCU9GJHeIW6SAHq0F_P46wg5AnbnI",
  });

  const onMapClick = (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarkerPosition(newPosition);
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        coordinates: [newPosition.lng, newPosition.lat],
      },
    }));
  };

  const onCoordinateChange = (index, value) => {
    const newCoordinates = [...formData.location.coordinates];
    newCoordinates[index] = parseFloat(value) || 0;

    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        coordinates: newCoordinates,
      },
    }));

    if (index === 0) {
      setMarkerPosition((prev) => ({ ...prev, lng: newCoordinates[0] }));
    } else {
      setMarkerPosition((prev) => ({ ...prev, lat: newCoordinates[1] }));
    }
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: markerPosition.lat,
    lng: markerPosition.lng,
  };

  if (loading) {
    return (
      <div className="px-5 md:px-8 lg:px-12 mb-2 md:mb-4 xl:mb-6 flex justify-center items-center h-64">
        <div className="text-xl">Loading property data...</div>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-8 lg:px-12 mb-2 md:mb-4 xl:mb-6">
      <h1 className="text-2xl font-bold mb-6">
        {propertyId ? "Edit Property" : "Add New Property"}
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 lg:gap-4">
          <div className="col-span-3 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Name of property
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
              placeholder="Property Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Availability Status
            </label>
            <Select
              options={availabilitySelect}
              onSelect={(value) =>
                handleSelectChange("availabilityStatus", value)
              }
              selectedOption={formData.availabilityStatus}
            />
            {errors.availabilityStatus && (
              <p className="text-red-500 text-xs">
                {errors.availabilityStatus}
              </p>
            )}
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
                  src={formData.banner || assets.upload}
                  className="w-full h-auto object-cover rounded-md md:rounded-lg aspect-3/2"
                  alt="Property Banner"
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
            {errors.banner && (
              <p className="text-red-500 text-xs">{errors.banner}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Property Type
            </label>
            <Select
              options={typeSelect}
              onSelect={(value) => handleSelectChange("type", value)}
              selectedOption={formData.type}
            />
            {errors.type && (
              <p className="text-red-500 text-xs">{errors.type}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Category
            </label>
            <Select
              options={categorySelect}
              onSelect={(value) => handleSelectChange("category", value)}
              selectedOption={formData.category}
            />
            {errors.category && (
              <p className="text-red-500 text-xs">{errors.category}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Property Price
            </label>
            <div className="flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg">
              <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full mx-1 md:mx-2 lg:mx-4">
                <IndianRupee className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                <input
                  type="number"
                  value={formData.price.value}
                  onChange={(e) =>
                    handleNestedInputChange("price", "value", e.target.value)
                  }
                  className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base py-2 md:py-3 lg:py-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                  placeholder="0.00"
                />
              </div>
              {/* <Select
                options={priceUnitSelect}
                onSelect={(value) =>
                  handleNestedInputChange("price", "unit", value)
                }
                selectedOption={formData.price.unit}
              /> */}
            </div>
            {errors.price?.value && (
              <p className="text-red-500 text-xs">{errors.price.value}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Price per Land Area
            </label>
            <div className="flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg">
              <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full ml-1 md:ml-2 lg:ml-4">
                <IndianRupee className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                <input
                  type="number"
                  value={formData.pricePerArea.value}
                  onChange={(e) =>
                    handleNestedInputChange(
                      "pricePerArea",
                      "value",
                      e.target.value
                    )
                  }
                  className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base py-2 md:py-3 lg:py-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                  placeholder="0.00"
                />
              </div>
              <Select
                options={areaUnitSelect}
                onSelect={(value) =>
                  handleNestedInputChange("pricePerArea", "unit", value)
                }
                selectedOption={formData.pricePerArea.unit}
              />
            </div>
            {errors.pricePerArea?.value && (
              <p className="text-red-500 text-xs">
                {errors.pricePerArea.value}
              </p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Plot Area
            </label>
            <div className="flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg">
              <input
                type="number"
                value={formData.plotArea.value}
                onChange={(e) =>
                  handleNestedInputChange("plotArea", "value", e.target.value)
                }
                className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                placeholder="0.00"
              />
              <Select
                options={areaUnitSelect}
                onSelect={(value) =>
                  handleNestedInputChange("plotArea", "unit", value)
                }
                selectedOption={formData.plotArea.unit}
              />
            </div>
            {errors.plotArea?.value && (
              <p className="text-red-500 text-xs">{errors.plotArea.value}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Total Project Area
            </label>
            <div className="flex items-center justify-between bg-[#C7D3A6] rounded-md lg:rounded-lg">
              <input
                type="number"
                value={formData.totalProjectArea.value}
                onChange={(e) =>
                  handleNestedInputChange(
                    "totalProjectArea",
                    "value",
                    e.target.value
                  )
                }
                className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                placeholder="0.00"
              />
              <Select
                options={areaUnitSelect}
                onSelect={(value) =>
                  handleNestedInputChange("totalProjectArea", "unit", value)
                }
                selectedOption={formData.totalProjectArea.unit}
              />
            </div>
            {errors.totalProjectArea?.value && (
              <p className="text-red-500 text-xs">
                {errors.totalProjectArea.value}
              </p>
            )}
          </div>

          <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Property Small Description
            </label>
            <textarea
              ref={(el) => (textareaRefs.current[0] = el)}
              name="propertyDescription"
              value={formData.propertyDescription}
              onChange={handleInputChange}
              onInput={() => handleTextareaLength(0)}
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-auto min-h-[40px] md:min-h-[48px] lg:min-h-[56px] rounded-md lg:rounded-lg outline-none resize-none"
              placeholder="Property Description"
            />
            {errors.propertyDescription && (
              <p className="text-red-500 text-xs">
                {errors.propertyDescription}
              </p>
            )}
          </div>

          <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Project Small Description
            </label>
            <textarea
              ref={(el) => (textareaRefs.current[1] = el)}
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              onInput={() => handleTextareaLength(1)}
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-auto min-h-[40px] md:min-h-[48px] lg:min-h-[56px] rounded-md lg:rounded-lg outline-none resize-none"
              placeholder="Project Small Description"
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-xs">
                {errors.projectDescription}
              </p>
            )}
          </div>

          <div className="col-span-4 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Project About
            </label>
            <textarea
              ref={(el) => (textareaRefs.current[2] = el)}
              name="projectAbout"
              value={formData.projectAbout}
              onChange={handleInputChange}
              onInput={() => handleTextareaLength(2)}
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-auto min-h-[40px] md:min-h-[48px] lg:min-h-[56px] rounded-md lg:rounded-lg outline-none resize-none"
              placeholder="About the Project"
            />
            {errors.projectAbout && (
              <p className="text-red-500 text-xs">{errors.projectAbout}</p>
            )}
          </div>

          <div className="col-span-4 row-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Gallery Images
            </label>
            <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 lg:gap-4 w-full">
              {formData.gallery.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    className="col-span-1 h-auto object-cover rounded-md aspect-3/2"
                    alt={`Gallery ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedGallery = formData.gallery.filter(
                        (_, i) => i !== index
                      );
                      setFormData((prev) => ({
                        ...prev,
                        gallery: updatedGallery,
                      }));
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="relative hover:opacity-80 rounded-md md:rounded-lg mt-2">
              <Button
                id="uploadGallery"
                title="Add Images"
                variant="secondary"
                onClick={() => document.getElementById("uploadGallery").click()}
              />
              <input
                id="uploadGallery"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="hidden"
                multiple
                onChange={handleGalleryUpload}
              />
            </div>
            {errors.gallery && (
              <p className="text-red-500 text-xs">{errors.gallery}</p>
            )}
          </div>

          <div className="col-span-4 w-full flex flex-col items-start gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Amenities
            </label>
            <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 lg:gap-4">
              {formData.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col gap-1 md:gap-2 lg:gap-3 w-full"
                >
                  <div className="relative">
                    <label
                      htmlFor={`uploadAmenity${index}`}
                      className="cursor-pointer"
                    >
                      <img
                        src={amenity.image || assets.upload}
                        className="w-full h-auto aspect-3/2 object-cover rounded-md lg:rounded-lg"
                        alt={`Amenity ${index + 1}`}
                      />
                    </label>
                    <input
                      id={`uploadAmenity${index}`}
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      onChange={(e) => handleAmenityImageUpload(index, e)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={amenity.name}
                      onChange={(e) => handleAmenityNameChange(index, e)}
                      className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
                      placeholder="Amenity Name"
                    />
                    {formData.amenities.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAmenity(index)}
                        className="bg-red-500 text-white rounded-md px-2"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {errors.amenities?.[index]?.name && (
                    <p className="text-red-500 text-xs">
                      {errors.amenities[index].name}
                    </p>
                  )}
                  {errors.amenities?.[index]?.image && (
                    <p className="text-red-500 text-xs">
                      {errors.amenities[index].image}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <Button
              title="Add Amenity"
              variant="secondary"
              onClick={handleAddAmenity}
              type="button"
            />
            {errors.amenities && typeof errors.amenities === "string" && (
              <p className="text-red-500 text-xs">{errors.amenities}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Locality
            </label>
            <input
              type="text"
              name="locality"
              value={formData.location.locality}
              onChange={(e) =>
                handleNestedInputChange("location", "locality", e.target.value)
              }
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
              placeholder="Locality"
            />
            {errors.location?.locality && (
              <p className="text-red-500 text-xs">{errors.location.locality}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.location.city}
              onChange={(e) =>
                handleNestedInputChange("location", "city", e.target.value)
              }
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
              placeholder="City"
            />
            {errors.location?.city && (
              <p className="text-red-500 text-xs">{errors.location.city}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.location.state}
              onChange={(e) =>
                handleNestedInputChange("location", "state", e.target.value)
              }
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
              placeholder="State"
            />
            {errors.location?.state && (
              <p className="text-red-500 text-xs">{errors.location.state}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Pin Code
            </label>
            <input
              type="text"
              name="pinCode"
              value={formData.location.pinCode}
              onChange={(e) =>
                handleNestedInputChange("location", "pinCode", e.target.value)
              }
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
              placeholder="Pin Code"
            />
            {errors.location?.pinCode && (
              <p className="text-red-500 text-xs">{errors.location.pinCode}</p>
            )}
          </div>

          {/* <div className="col-span-3 row-span-3 w-full h-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Location (Map)
            </label>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md md:rounded-lg">
              <p>Map integration would go here</p>
            </div>
          </div> */}
          <div className="col-span-3 row-span-3 w-full h-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Location (Map)
            </label>
            <div className="w-full flex gap-2 mb-2">
              <div className="flex-1">
                <label className="text-black text-xs">Longitude</label>
                <input
                  type="number"
                  value={formData.location.coordinates[0]}
                  onChange={(e) => onCoordinateChange(0, e.target.value)}
                  className="w-full bg-[#C7D3A6] text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 leading-tight h-10 rounded-md outline-none"
                  step="0.000001"
                />
              </div>
              <div className="flex-1">
                <label className="text-black text-xs">Latitude</label>
                <input
                  type="number"
                  value={formData.location.coordinates[1]}
                  onChange={(e) => onCoordinateChange(1, e.target.value)}
                  className="w-full bg-[#C7D3A6] text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 leading-tight h-10 rounded-md outline-none"
                  step="0.000001"
                />
              </div>
            </div>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onClick={onMapClick}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={markerPosition} />
              </GoogleMap>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md md:rounded-lg">
                <p>Loading map...</p>
              </div>
            )}
          </div>

          <div className="col-span-1 row-span-2 w-full h-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Developer Brand Logo
            </label>
            <div className="relative hover:opacity-80 rounded-md md:rounded-lg">
              <label
                htmlFor="uploadDeveloperLogo"
                className="cursor-pointer flex justify-center items-center"
              >
                <img
                  src={formData.developer.logo || assets.upload}
                  className="w-full h-auto object-cover rounded-md md:rounded-lg aspect-3/2"
                  alt="Developer Logo"
                />
              </label>
              <input
                id="uploadDeveloperLogo"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="hidden"
                onChange={handleDeveloperLogoUpload}
              />
            </div>
            {errors.developer?.logo && (
              <p className="text-red-500 text-xs">{errors.developer.logo}</p>
            )}
          </div>

          <div className="col-span-1 w-full flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
              Developer Name
            </label>
            <input
              type="text"
              value={formData.developer.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  developer: {
                    ...prev.developer,
                    name: e.target.value,
                  },
                }))
              }
              className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg outline-none"
              placeholder="Developer Name"
            />
            {errors.developer?.name && (
              <p className="text-red-500 text-xs">{errors.developer.name}</p>
            )}
          </div>

          <div className="col-span-4 flex w-full items-center justify-end gap-2 md:gap-4 lg:gap-6">
            <Button
              title="Save to Draft"
              variant="destructive"
              onClick={(e) => handleSubmit(e, "draft")}
              type="button"
            />
            <Button
              title="Add to Properties"
              variant="secondary"
              onClick={(e) => handleSubmit(e, "published")}
              type="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperties;
