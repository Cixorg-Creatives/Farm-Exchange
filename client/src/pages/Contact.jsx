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
    <div className='sm:px-28 sm:py-10'>
      <div className='flex flex-wrap items-start justify-between'>
        <div className='sm:w-1/2'>
          <h1 className='prata text-[#31511E] font-normal text-5xl sm:text-8xl leading-28 uppercase'>We&apos;re Here to Help</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#859F3E] buda font-normal text-2xl old-standard-tt">Full Name</FormLabel>
                    <FormControl>
                      <Input className="sm:h-14 border-[1px] border-[#859F3E] sm:px-5 sm:py-3 old-standard-tt font-normal text-xl leading-7 text-[#859F3E] placeholder:text-[#859F3E] focus-visible:border-[#859F3E] focus-visible:ring-[#859F3E]/30" placeholder="Enter your fullname" {...field} />
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
                    <FormLabel className="text-[#859F3E] buda font-normal text-2xl old-standard-tt">Email Id</FormLabel>
                    <FormControl>
                      <Input className="sm:h-14 border-[1px] border-[#859F3E] sm:px-5 sm:py-3 old-standard-tt font-normal text-xl leading-7 text-[#859F3E] placeholder:text-[#859F3E] focus-visible:ring-[#859F3E]/30" type="email" placeholder="example@email.com" {...field} />
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
                    <FormLabel className="text-[#859F3E] buda font-normal text-2xl old-standard-tt">Contact No</FormLabel>
                    <FormControl>
                      <Input className="sm:h-14 border-[1px] border-[#859F3E] sm:px-5 sm:py-3 old-standard-tt font-normal text-xl leading-7 text-[#859F3E] placeholder:text-[#859F3E] focus-visible:border-[#859F3E] focus-visible:ring-[#859F3E]/30" type="tel" placeholder="+91 " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="!w-64 !h-16 sm:w-auto bg-[#859F3E] text-white old-standard-tt font-bold text-2xl leading-8">Contact Now <ArrowUpRight size={32} /></Button>

            </form>
          </Form>
        </div>
        <div className="sm:w-1/2 flex justify-center">
          <img src={assets.contact_1} alt="Contact" className='sm:h-[40.313rem] w-auto' />
        </div>
      </div>
      <div className=''>
        <div className='sm:w-[47.313rem] my-20 flex flex-col gap-5'>
          <h1 className='old-standard-tt font-bold text-[#859F3E] sm:text-[1.75rem] leading-10 uppercase'>Benefits of joining us</h1>
          <p className='old-standard-tt font-bold text-[#31511E] sm:text-[2rem] leading-11'>Experience growth, support, and success with our community.</p>
        </div>
        <div className='mt-20 mb-52 flex justify-between'>
          <div className='relative'>
            <img src={assets.contact_2} alt="" className='!w-[868px] h-[491px]' />
            <div className='bg-[#31511E] absolute sm:w-[40.563rem] sm:h-[22.813rem] sm:top-84 sm:right-4'></div>
            <div className='bg-[#859F3E] absolute sm:w-[40.563rem] sm:h-[22.813rem] sm:top-80 sm:right-8'>
              <div className='h-full flex flex-col items-stretch justify-between'>
                <div><h1 className='uppercase old-standard-tt text-[#F6FCDF] font-normal text-[2.5rem] leading-14 mx-11 my-8'>Join Us to Grow, Succeed, and Thrive Together!</h1></div>
                <div className='w-full flex justify-end'><h2 className='h-full old-standard-tt text-[#F6FCDF] font-bold text-[1.75rem] leading-10 mx-9 my-7'>Farm Exchange</h2></div>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-[#859F3E] md:h-[30.688rem] md:w-[25rem] py-10 px-4'>
                <h1 className='text-[#31511E] uppercase old-standard-tt font-bold text-4xl leading-12 text-start align-middle px-1'>Benefits</h1>
                <div className="flex flex-col items-start justify-evenly gap-7 mt-7">
                  <div className='flex items-center gap-3'>
                    <div><img src={assets.contact_leaf} alt="" /></div>
                    <div className='old-standard-tt font-normal text-2xl leading-8 text-[#31511E]'>Profitable Farmland Investment</div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div><img src={assets.contact_leaf} alt="" /></div>
                    <div className='old-standard-tt font-normal text-2xl leading-8 text-[#000000]'>Sustainable & Organic Farming</div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div><img src={assets.contact_leaf} alt="" /></div>
                    <div className='old-standard-tt font-normal text-2xl leading-8 text-[#000000]'>Expert Support & Guidance</div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div><img src={assets.contact_leaf} alt="" /></div>
                    <div className='old-standard-tt font-normal text-2xl leading-8 text-[#000000]'>Guaranteed Returns & Growth</div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div><img src={assets.contact_leaf} alt="" /></div>
                    <div className='old-standard-tt font-normal text-2xl leading-8 text-[#000000]'>Hassle-Free Land Management</div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div><img src={assets.contact_leaf} alt="" /></div>
                    <div className='old-standard-tt font-normal text-2xl leading-8 text-[#000000]'>Thriving Farming Community</div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
