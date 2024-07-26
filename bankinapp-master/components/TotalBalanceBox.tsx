import { formatAmount } from '@/lib/utils' // Importando la función para formatear cantidades desde utilidades
import React from 'react'
import CountUp from 'react-countup'; // Importando la biblioteca para contar hacia arriba
import AnimatedCounter from './AnimatedCounter'; // Importando el componente de contador animado
import DoughnutChart from './DoughnutChart'; // Importando el componente de gráfico de dona

const TotalBalanceBox = ({ 
    accounts = [], totalCurrentBalance, totalBanks 
}: TotalBalanceBoxProps) => {
    return (
        <section className='total-balance'> {/* Contenedor principal de la caja de saldo total */}
            <div className='total-balance-chart'> {/* Contenedor del gráfico de dona */}
                <DoughnutChart accounts={accounts} /> {/* Componente de gráfico de dona */}
            </div>

            <div className='flex flex-col gap-6'> {/* Contenedor flex para el contenido */}
                <h2 className='header-2'>
                    Bank Accounts: {totalBanks} {/* Mostrando el número total de cuentas bancarias */}
                </h2>
                <div className='flex flex-col gap-2'> {/* Contenedor flex para el saldo total */}
                    <p className='total-balance-label'>
                        Total Current Balance: ${totalCurrentBalance.toLocaleString()} {/* Mostrando el saldo total actual formateado */}
                    </p>

                    <div className='total-balance-amount flex-center gap-2'> {/* Contenedor flex para el contador animado */}
                        <AnimatedCounter amount={totalCurrentBalance} /> {/* Componente de contador animado mostrando el saldo total */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox; // Exportando el componente `TotalBalanceBox`
