"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import React from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
    accounts: any[]; 
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2750, 5702],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return <Doughnut 
    data={data}
    options={{
        cutout:'60%',
        plugins:{
        legend:{
            display: false
        }
    }
    }}
    
    />
}

export default DoughnutChart
