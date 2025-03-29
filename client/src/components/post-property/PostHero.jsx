import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../Button";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters." }),
  interested: z.string().min(1, { message: "Please select one option." }),
});

const formData = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your fullname",
    type: "text",
  },
  {
    name: "email",
    label: "Email Id",
    placeholder: "example@gmail.com",
    type: "email",
  },
  { name: "phone", label: "Contact No", placeholder: "+91", type: "tel" },
  { name: "interested", label: "Interested In" },
];

const PostHero = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      interested: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setMessage(null);

    try {
      const { data } = await axios.post("http://localhost:3000/post-property", {
        full_name: values.fullName,
        email: values.email,
        phone: values.phone,
        interested_in: values.interested,
      });
      toast.success("Post request added successfully!")
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.message || "Something went wrong!")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-6 md:py-10 xl:py-14">
      <div className="grid lg:grid-cols-[9fr_17fr] gap-2 md:gap-3 lg:gap-4">
        <div className="hidden lg:block col-span-1 w-full h-auto">
          <img src={assets.post_1} alt="" className="w-full h-auto" />
        </div>
        <div className="col-span-1 w-full h-full bg-[#9DB265]">
          <p className="capitalize text-center text-[#31511E] font-bold text-base md:text-xl lg:text-[2rem] px-4 md:px-8 lg:px-16 py-3.5 md:py-7 lg:py-14">
            Share your details with us, and we'll get in touch with you.
          </p>
          <div className="h-3/4 px-8 md:px-16 lg:px-32">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="h-full flex flex-col justify-between"
              >
                <div className="space-y-6 mt-6">
                  {formData.map((item, index) => (
                    <FormField
                      key={index}
                      control={form.control}
                      name={item.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#F6FCDF] buda font-normal text-sm md:text-lg lg:text-2xl">
                            {item.label}
                          </FormLabel>
                          <FormControl>
                            {item.name !== "interested" ? (
                              <Input
                                type={item.type}
                                className="w-full py-2 md:py-4 lg:py-8 border-[1px] border-[#F6FCDF] text-[#F6FCDF] placeholder:text-[#F6FCDF]/60 focus-visible:border-[#F6FCDF] focus-visible:ring-[#F6FCDF]/30 text-sm md:text-base lg:text-lg"
                                placeholder={item.placeholder}
                                {...field}
                              />
                            ) : (
                              <div className="flex items-center justify-start gap-3 md:gap-6 lg:gap-9">
                                {["Developer", "Owner"].map((option) => (
                                  <div
                                    key={option}
                                    className="flex items-center space-x-2"
                                  >
                                    <Checkbox
                                      id={option}
                                      checked={field.value === option}
                                      onCheckedChange={(checked) =>
                                        checked && field.onChange(option)
                                      }
                                    />
                                    <label
                                      htmlFor={option}
                                      className="text-[#F6FCDF] text-sm md:text-base lg:text-lg font-medium"
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {message && (
                  <p
                    className={`text-center mt-2 text-sm font-medium ${message.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {message.text}
                  </p>
                )}

                <div className="flex justify-center py-4 md:py-8 lg:py-0">
                  <Button type='submit' title={"Post Property"} icon={"show"} variant="ternary" loading={loading} />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHero;
