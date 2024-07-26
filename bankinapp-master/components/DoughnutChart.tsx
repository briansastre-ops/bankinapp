"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import React from 'react'

// Registrar los componentes necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend)

// Definición de las propiedades (props) que el componente recibirá
interface DoughnutChartProps {
    accounts: any[]; 
}

// Definición del componente funcional DoughnutChart
const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
    // Datos para el gráfico de dona
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2750, 5702], // Datos de ejemplo para cada banco
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] // Colores de cada segmento del gráfico
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3'] // Etiquetas para cada segmento
    }

    // Renderizar el gráfico de dona con las opciones especificadas
    return (
        <Doughnut 
            data={data}
            options={{
                cutout: '60%', // Tamaño del agujero en el centro del gráfico
                plugins: {
                    legend: {
                        display: false // Ocultar la leyenda del gráfico
                    }
                }
            }}
        />
    )
}

export default DoughnutChart
