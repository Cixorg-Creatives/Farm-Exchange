import React from 'react'
import { assets } from '@/assets/assets'
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
import Benefits from '@/components/contact/benefits'

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

const HeroForm = () => {

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
    )
}

export default HeroForm