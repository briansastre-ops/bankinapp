"use client"

import React from 'react';
// Importando componentes desde el módulo `@/components/ui/sheet`
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image'; // Importando el componente de imagen de Next.js
import Link from 'next/link'; // Importando el componente de enlace de Next.js
import { sidebarLinks } from '@/constant/type'; // Importando enlaces de la barra lateral desde una constante
import { usePathname } from 'next/navigation'; // Hook de Next.js para obtener la ruta actual
import { cn } from '@/lib/utils'; // Importando una función de utilidad para combinar clases

// Componente `MobileNavbar` que recibe `user` como prop
const MobileNavbar = ({ user }: MobileNavProps) => {
    const pathname = usePathname(); // Obtiene la ruta actual

    return (
        <section className='w-full max-w-[264px]'> {/* Contenedor principal de la barra de navegación móvil */}
            <Sheet> {/* Componente contenedor que probablemente maneja una hoja deslizante */}
                <SheetTrigger> {/* Botón para activar/desactivar la hoja */}
                    <Image
                        src="/icons/hamburger.svg" // Icono de hamburguesa para el menú móvil
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer' // Clase para cambiar el cursor a pointer
                    />
                </SheetTrigger>
                <SheetContent side="left"> {/* Contenido de la hoja deslizante alineado a la izquierda */}
                    <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2"> {/* Enlace al inicio */}
                        <Image
                            src="/icons/logo.svg" // Logo de la aplicación
                            width={34}
                            height={34}
                            alt="Horizon logo"
                            className="size-[24px] max-xl:size-14"
                        />
                        <h1 className="sidebar-logo">Horizon</h1> {/* Título/logo de la barra lateral */}
                    </Link>

                    {sidebarLinks.map((item) => { // Itera sobre los enlaces de la barra lateral
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`); // Verifica si la ruta actual coincide o empieza con la ruta del enlace

                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} // Aplica clase de estilo condicionalmente
                            >
                                <div className="relative size-6"> {/* Contenedor de la imagen del enlace */}
                                    <Image
                                        src={item.imgURL} // Imagen del enlace
                                        alt={item.label}
                                        fill
                                        className={cn({
                                            'brightness-[3] invert-0': isActive // Ajuste de estilo condicional para la imagen activa
                                        })}
                                    />
                                </div>
                                <p className={cn("sidebar-label", { "!text-white": isActive })}> {/* Etiqueta del enlace */}
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNavbar; // Exportando el componente `MobileNavbar`
