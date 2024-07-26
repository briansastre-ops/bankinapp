"use client";

import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"; // Importando componentes de la hoja deslizante
import { sidebarLinks } from "@/constant/type"; // Importando enlaces de la barra lateral desde una constante
import { cn } from "@/lib/utils"; // Importando una función de utilidad para combinar clases
import Image from "next/image"; // Importando el componente de imagen de Next.js
import Link from "next/link"; // Importando el componente de enlace de Next.js
import { usePathname } from "next/navigation"; // Hook de Next.js para obtener la ruta actual

// Componente `MobileNavbar` que recibe `user` como prop
const MobileNavbar = ({ user }: MobileNavProps) => {
    const pathname = usePathname(); // Obtiene la ruta actual

    return (
        <section className="w-full max-w-[264px]"> {/* Contenedor principal de la barra de navegación móvil */}
            <Sheet> {/* Componente contenedor que probablemente maneja una hoja deslizante */}
                <SheetTrigger> {/* Botón para activar/desactivar la hoja */}
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white"> {/* Contenido de la hoja deslizante alineado a la izquierda */}
                    <Link href="/" className="cursor-pointer flex items-center gap-1 px-4"> {/* Enlace al inicio */}
                        <Image 
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt="Horizon logo"
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1> {/* Título/logo de la barra lateral */}
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item) => { // Itera sobre los enlaces de la barra lateral
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`); // Verifica si la ruta actual coincide o empieza con la ruta del enlace

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })} // Aplica clase de estilo condicionalmente
                                            >
                                                <Image 
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive // Ajuste de estilo condicional para la imagen activa
                                                    })}
                                                />
                                                <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNavbar; // Exportando el componente `MobileNavbar`
