import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";
import toast from "react-hot-toast";

const List = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/get-contact`);
      setContacts(response.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSeenStatus = async (id) => {
    try {
      const contact = contacts.find((c) => c._id === id);
      const updatedStatus = !contact.seen;

      await axios.patch(`${import.meta.env.VITE_SERVER_DOMAIN}/update-contact/${id}`, {
        seen: updatedStatus,
      });

      setContacts(
        contacts.map((c) => (c._id === id ? { ...c, seen: updatedStatus } : c))
      );
    } catch (err) {
      console.error("Error updating contact status:", err);
      toast.error("Failed to update contact status");
    }
  };

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    if (!item.seen) {
      await toggleSeenStatus(item._id);
    }
  };

  const deleteContact = async (id) => {
    setDeleteLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_DOMAIN}/delete-contact/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
      toast.success("Contact deleted successfully!");
    } catch (err) {
      console.error("Error deleting contact:", err);
      toast.error("Failed to delete contact.");
    } finally {
      setDeleteLoading(false);
      setDeleteConfirm(null);
    }
  };

  if (loading || error)
    return (
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );

  return (
    <div className="my-2 md:my-4 xl:my-6 clashdisplay">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6">
        {contacts.map((item) => (
          <div
            key={item._id}
            className={`relative px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg`}
            onClick={(e) => {
              if (!e.target.closest(".delete-button")) {
                handleItemClick(item);
              }
            }}
          >
            <div className="absolute right-2 md:right-3 lg:right-4 top-2 md:top-4 lg:top-4 flex items-center gap-2 md:gap-3 lg:gap-4">
              <Button
                variant="primary"
                symbol={item.seen ? "eye_closed" : "eye"}
                icon="show"
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSeenStatus(item._id);
                }}
              />
              <Button
                variant="destructive"
                symbol="delete"
                icon="show"
                className="delete-button"
                onClick={() => setDeleteConfirm(item)}
              />
            </div>
            <div className={item.seen ? "opacity-60" : ""}>
              <p className="uppercase text-[#859F3E] font-semibold text-[10px] md:text-xs lg:text-sm leading-tight mt-4 md:mt-6 lg:mt-8">
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
              <p className="capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight">
                {item.full_name}
              </p>
              <p className="text-[#31511E] font-medium text-xs md:text-sm lg:text-base">
                {item.email}
              </p>
              <p className="capitalize text-[#31511E] font-medium text-xs md:text-sm lg:text-base leading-tight">
                {item.phone}
              </p>
              <p className="capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base leading-tight">
                {item.message.slice(0, 30) + "..."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {deleteConfirm && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4"
          onClick={() => setDeleteConfirm(null)}
        >
          <div
            className="bg-[#F6FCDF] px-4 py-6 border-1 border-[#31511E]/50 max-w-sm w-full flex flex-col items-center rounded-md shadow-lg gap-1 md:gap-2 lg:gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[#31511E] font-semibold text-base md:text-xl lg:text-3xl leading-tight">
              Are you sure?
            </p>
            <p className="text-[#859F3E] font-medium text-xs md:text-sm lg:text-base leading-tight">
              Do you really want to delete this contact?
            </p>
            <div className="flex gap-3 mt-4">
              <Button
                loading={deleteLoading}
                icon="show"
                symbol="delete"
                variant="destructive"
                onClick={() => deleteContact(deleteConfirm._id)}
              />
            </div>
          </div>
        </div>
      )}

      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#F6FCDF] px-4 py-6 border border-[#31511E]/50 max-w-sm w-full flex flex-col items-start justify-center rounded-md shadow-lg gap-0.5 md:gap-[3px] lg:gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="uppercase text-[#859F3E] font-semibold text-[10px] md:text-xs lg:text-sm leading-tight">
              {new Date(selectedItem.publishedAt).toLocaleDateString()}
            </p>
            <p className="capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight">
              {selectedItem.full_name}
            </p>
            <p className="text-[#31511E] font-medium text-xs md:text-sm lg:text-base">
              {selectedItem.email}
            </p>
            <p className="capitalize text-[#31511E] font-medium text-xs md:text-sm lg:text-base leading-tight">
              {selectedItem.phone}
            </p>
            <p className="capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base leading-tight">
              {selectedItem.message}
            </p>
            <Button
              icon={"show"}
              symbol={"close"}
              variant="destructive"
              className="mt-1 md:mt-2 lg:mt-3"
              onClick={() => setSelectedItem(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default List;

const Skeleton = () => {
  return (
    <div className="relative px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg animate-pulse">
      <div className="w-20 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded"></div>
      <div className="w-36 h-4 md:h-6 lg:h-8 bg-[#c7d3a7] rounded"></div>
      <div className="w-40 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded"></div>
      <div className="w-36 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded"></div>
      <div className="w-full h-10 md:h-12 lg:h-14 bg-[#c7d3a7] rounded"></div>
    </div>
  );
};
