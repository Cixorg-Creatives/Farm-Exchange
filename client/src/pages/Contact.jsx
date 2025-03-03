import { assets } from '@/assets/assets'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowUpRight } from 'lucide-react'

// ✅ Define form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
})

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = (values) => {
    console.log("Form Submitted:", values)
  }

  return (
    <div className='sm:px-28 sm:py-10 px-4 py-5'>
      <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between px-4 sm:px-8 md:px-16'>
        <div className='w-full lg:w-1/2'>
          <h1 className='prata text-[#31511E] font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight uppercase text-center lg:text-left'>
            We&apos;re Here to Help
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#859F3E] buda font-normal text-xl sm:text-2xl old-standard-tt">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-12 sm:h-14 border-[1px] border-[#859F3E] px-4 sm:px-5 sm:py-3 old-standard-tt font-normal text-lg sm:text-xl leading-7 text-[#859F3E] placeholder:text-[#859F3E] focus-visible:border-[#859F3E] focus-visible:ring-[#859F3E]/30"
                        placeholder="Enter your fullname" {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#859F3E] buda font-normal text-xl sm:text-2xl old-standard-tt">Email Id</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-12 sm:h-14 border-[1px] border-[#859F3E] px-4 sm:px-5 sm:py-3 old-standard-tt font-normal text-lg sm:text-xl leading-7 text-[#859F3E] placeholder:text-[#859F3E] focus-visible:ring-[#859F3E]/30"
                        type="email" placeholder="example@email.com" {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#859F3E] buda font-normal text-xl sm:text-2xl old-standard-tt">Contact No</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-12 sm:h-14 border-[1px] border-[#859F3E] px-4 sm:px-5 sm:py-3 old-standard-tt font-normal text-lg sm:text-xl leading-7 text-[#859F3E] placeholder:text-[#859F3E] focus-visible:border-[#859F3E] focus-visible:ring-[#859F3E]/30"
                        type="tel" placeholder="+91 " {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center lg:justify-start">
                <Button type="submit" className="w-full sm:w-64 h-12 sm:h-16 bg-[#859F3E] text-white old-standard-tt font-bold text-xl sm:text-2xl leading-8 flex items-center justify-center">
                  Contact Now <ArrowUpRight size={28} className="ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 lg:ml-4">
          <img src={assets.contact_1} alt="Contact" className='w-full sm:w-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl' />
        </div>
      </div>
      <div className=''>
        <div className='lg:w-[47.313rem] my-10 sm:my-20 flex flex-col gap-5'>
          <h1 className='old-standard-tt font-bold text-[#859F3E] text-lg sm:text-[1.75rem] leading-8 sm:leading-10 uppercase'>
            Benefits of joining us
          </h1>
          <p className='old-standard-tt font-bold text-[#31511E] text-xl sm:text-[2rem] leading-8 sm:leading-11'>
            Experience growth, support, and success with our community.
          </p>
        </div>

        <div className='mt-10 sm:mt-20 mb-20 lg:mb-52 flex flex-col xl:flex-row justify-between items-center lg:items-start gap-10'>
          <div className='relative w-full lg:w-auto'>
            <img src={assets.contact_2} alt='' className='w-full xl:!w-[868px] h-auto xl:h-[491px]' />
            <div className='hidden xl:flex lg:absolute lg:top-84 lg:right-4 bg-[#31511E] bg-opacity-50 lg:bg-opacity-100 sm:w-full lg:w-[40.563rem] sm:h-full lg:h-[22.813rem]'></div>
            <div className='absolute inset-0 xl:inset-auto xl:top-80 xl:right-8 bg-[#859F3E]/80 xl:bg-[#859F3E] sm:w-full xl:w-[40.563rem] sm:h-full xl:h-[22.813rem] flex flex-col justify-between p-6 sm:p-10'>
              <h1 className='uppercase old-standard-tt text-[#F6FCDF] font-normal text-xl sm:text-2xl lg:text-[2.5rem] leading-8 sm:leading-10 lg:leading-14'>
                Join Us to Grow, Succeed, and Thrive Together!
              </h1>
              <div className='w-full flex justify-end'>
                <h2 className='old-standard-tt text-[#F6FCDF] font-bold text-lg sm:text-xl lg:text-[1.75rem] leading-6 sm:leading-8 lg:leading-10'>
                  Farm Exchange
                </h2>
              </div>
            </div>
          </div>

          <div className='border-[1px] border-[#859F3E] w-full xl:w-[25rem] lg:h-[30.688rem] p-6 sm:py-10 sm:px-4'>
            <h1 className='text-[#31511E] uppercase old-standard-tt font-bold text-2xl sm:text-4xl leading-8 sm:leading-12 text-start'>
              Benefits
            </h1>
            <div className='flex flex-col items-start gap-5 sm:gap-7 mt-5 sm:mt-7'>
              {[
                'Profitable Farmland Investment',
                'Sustainable & Organic Farming',
                'Expert Support & Guidance',
                'Guaranteed Returns & Growth',
                'Hassle-Free Land Management',
                'Thriving Farming Community',
              ].map((benefit, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <img src={assets.contact_leaf} alt='' className='w-6 sm:w-auto' />
                  <p className='old-standard-tt font-normal text-lg sm:text-xl leading-6 sm:leading-8 text-[#31511E]'>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
