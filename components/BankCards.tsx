import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Definición del componente BankCards que recibe account, userName y showBalance como props
const BankCards = ({account, userName, showBalance = true} : CreditCardProps) => {
    return (
        <div className='flex flex-col'>
            <Link href="/" className='bank-card'>
                <div className='bank-card_content'>
                    <div>
                        <h1 className='text-16 font-semibold text-white'>
                            {account.name || 'userName'} {/* Muestra el nombre de la cuenta o 'userName' si no está disponible */}
                        </h1>
                        <p className='font-ibm-plex-serif font-black text-white'>
                            {formatAmount(account.currentBalance)} {/* Muestra el balance actual formateado */}
                        </p>
                    </div>
                    <article className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-12 font-semibold text-white'>
                                {userName} {/* Muestra el nombre del usuario */}
                            </h1>
                            <h2 className='text-12 font-semibold text-white'>
                                ●● / ●● {/* Muestra información de la tarjeta */}
                            </h2>
                        </div>
                        <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                            ●●●● ●●●● ●●●●<span className='text-16'>
                                {account.mask} {/* Muestra el número enmascarado de la tarjeta */}
                            </span>
                        </p>
                    </article>
                </div>
                <div className='bank-card_icon'>
                    <Image 
                        src='/icons/Paypass.svg'
                        width={20}
                        height={24}
                        alt='pay' 
                    />
                    <Image 
                        src="/icons/mastercard.svg"
                        width={45}
                        height={32}
                        alt="mastercard" 
                        className="ml-5"
                    />
                </div>
                <Image 
                    src="/icons/lines.png"
                    width={316}
                    height={190}
                    alt="lines" 
                    className="absolute top-0 left-0"
                />
            </Link>
            {/* Copy */}
        </div>
    )
}

export default BankCards
