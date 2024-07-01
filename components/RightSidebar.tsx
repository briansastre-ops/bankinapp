import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCards from './BankCards'

// Definición del componente RightSidebar que recibe user, transactions y banks como props
const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            {/* Sección del banner y perfil */}
            <section className='flex flex-col pb-8'>
                <div className='profile-banner'/>
                <div className='profile'>
                    <div className='profile-img'>
                        {/* Muestra la inicial del nombre del usuario */}
                        <span className='text5-xl font-bold text-blue-500'>{user.firstName[0]}</span>
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {/* Muestra el nombre completo del usuario */}
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className='profile-email'>
                            {/* Muestra el email del usuario */}
                            {user.email}
                        </p>
                    </div>
                </div>
            </section>
            {/* Sección de los bancos */}
            <section className='banks'>
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>
                        My Banks
                    </h2>
                    {/* Enlace para añadir un nuevo banco */}
                    <Link href="/" className='flex gap-2'>
                        <Image
                            src="/icons/plus.svg"
                            width={20}
                            height={20}
                            alt="Add Bank"
                        />
                        <h2 className='text-14 font-semibold text-gray-600'>
                            Add Banks
                        </h2>
                    </Link>
                </div>
                {/* Si hay bancos disponibles, muestra las tarjetas de los bancos */}
                {banks.length > 0 && (
                    <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                        <div className='relative z-10'>
                            <BankCards
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={`${user.firstName} ${user.lastName}`}
                                showBalance={false}
                            />
                        </div>
                        {/* Si hay un segundo banco, lo muestra en una posición diferente */}
                        {banks[1] && (
                            <div className='absolute right-0 top-8 z-0 w-[90%]'>
                                <BankCards
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={`${user.firstName} ${user.lastName}`}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    )
}

export default RightSidebar

