import MobileNavbar from "@/components/MobileNavbar"; // Importando el componente MobileNavbar
import SideBar from "@/components/SideBar"; // Importando el componente SideBar
import Image from "next/image"; // Importando el componente Image de Next.js

// Definiendo el componente RootLayout que recibe children como prop
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Objeto para simular un usuario logueado
  const loggedIn = { firstName: 'Brian', lastName: 'Sastre' };

  return (
    <main className="flex h-screen w-full font-inter"> {/* Contenedor principal del layout */}
      <SideBar user={loggedIn}/> {/* Renderizando el componente SideBar */}
      <div className="flex size-full flex-col"> {/* Contenedor flex para el contenido */}
        <div className="root-layout"> {/* Contenedor principal del layout */}
          <Image
            src="/icons/logo.svg"
            height={30}
            width={30}
            alt="menu icon"
          />
          <div>
            <MobileNavbar user={loggedIn}/> {/* Renderizando el componente MobileNavbar */}
          </div>
        </div>
        {children} {/* Renderizando el contenido recibido como children */}
      </div>
    </main>
  );
}
