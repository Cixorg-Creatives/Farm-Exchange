import React from 'react'
import { assets } from '@/assets/assets'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { Textarea } from '../ui/textarea'
import Button from '../Button'

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
    message: z.string().min(5, {
        message: "Message must be of enough length",
    }),
})

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
    {
        name: "phone",
        label: "Contact No",
        placeholder: "+91",
        type: "tel",
    },
    {
        name: "message",
        label: "Your Message",
        placeholder: "Enter your message",
        type: "text",
    },
]

const HeroForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const onSubmit = (values) => {
        console.log("Form Submitted:", values)
        form.reset();
    }


    return (
        <div className='py-6 md:py-10 xl:py-14 flex flex-col-reverse lg:flex-row items-center justify-between clashdisplay'>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight uppercase text-center lg:text-left'>
                    We&apos;re Here to Help
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:space-y-4 lg:space-y-6 mt-6">
                        {
                            formData.map((item, index) => (
                                <FormField
                                    control={form.control}
                                    name={item.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[#859F3E] buda font-semibold text-base md:text-xl lg::text-2xl">{item.label}</FormLabel>
                                            <FormControl>
                                                {
                                                    item.name === 'message' ? (
                                                        <Textarea type={item.type}
                                                            className="w-full h-10 md:h-12 lg:h-14 border-[1px] border-[#859F3E] p-2 md:p-3 lg:p-4 font-normal text-xs md:text-sm lg:text-base leading-tight text-[#859F3E] placeholder:text-[#859F3E]/50 focus-visible:border-[#859F3E] focus-visible:ring-[#859F3E]/30"
                                                            placeholder={item.placeholder} {...field}
                                                        />
                                                    ) : (
                                                        <Input type={item.type}
                                                            className="w-full h-10 md:h-12 lg:h-14 border-[1px] border-[#859F3E] p-2 md:p-3 lg:p-4 font-normal text-xs md:text-sm lg:text-base leading-tight text-[#859F3E] placeholder:text-[#859F3E]/50 focus-visible:border-[#859F3E] focus-visible:ring-[#859F3E]/30"
                                                            placeholder={item.placeholder} {...field}
                                                        />
                                                    )
                                                }
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))
                        }
                        <div className="flex justify-start">
                            <Button type="submit" title='Contact Now' variant='primary' icon='show' />
                        </div>
                    </form>
                </Form>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={assets.contact_1} alt="Contact" className='w-full h-auto' />
            </div>
        </div>
    )
}

export default HeroForm