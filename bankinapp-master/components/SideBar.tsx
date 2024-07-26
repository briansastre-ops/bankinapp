'use client'

import { sidebarLinks } from '@/constant/type' // Importando enlaces de la barra lateral desde una constante
import { cn } from '@/lib/utils' // Importando una función de utilidad para combinar clases
import Image from 'next/image' // Importando el componente de imagen de Next.js
import Link from 'next/link' // Importando el componente de enlace de Next.js
import { usePathname } from 'next/navigation' // Hook de Next.js para obtener la ruta actual
// import Footer from './Footer' // (Comentado) Importar un componente de pie de página
// import PlaidLink from './PlaidLink' // (Comentado) Importar un componente PlaidLink

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname(); // Obtiene la ruta actual

    return (
        <section className="sidebar"> {/* Contenedor principal de la barra lateral */}
            <nav className="flex flex-col gap-4"> {/* Contenedor de navegación con diseño flex y espacio entre elementos */}
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
                User {/* Placeholder para el usuario */}
            </nav>
            user {/* Placeholder para el usuario */}
        </section>
    );
};

export default Sidebar; // Exportando el componente `Sidebar`
