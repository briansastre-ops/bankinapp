"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils'



const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null)
    
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof authFormSchema>) {
        console.log(values)
    }

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className="cursor-pointer flex items-center gap-1"> {/* Enlace al inicio */}
                    <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1> {/* Título/logo de la barra lateral */}
                </Link>
                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user ? 'Vincular Cuenta' : type === 'sign-in' ? 'Iniciar Sesión' : 'Registrarse'}
                    </h1>
                    <p className='text-16 font-normal text-gray-600'>
                        {user ? 'Vincula tu cuenta para comenzar' : 'Por favor ingresa tus datos'}
                    </p>
                </div>
            </header>
            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* PlaidLink */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <div className='form-item'>
                                        <FormLabel className='form-label'>
                                            Email
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input
                                                    placeholder='Enter your email'
                                                    className='input-class'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className='form-message mt-2'/>
                                        </div>
                                    </div>
                                )}
                            />
                            <Button type="submit">Enviar</Button>
                        </form>
                    </Form>
                </>
            )}
        </section>
    )
}

export default AuthForm
