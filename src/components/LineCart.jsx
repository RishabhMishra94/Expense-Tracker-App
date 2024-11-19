
import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend } from 'chart.js';


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend);

const LineCart = ({ data, title, lineColor }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = data.map((item) => item.date);
    const amounts = data.map((item) => item.amount);

    const chartData = {
      labels,
      datasets: [
        {
          label: title,
          data: amounts,
          borderColor: lineColor,
          tension: 0.3,
        },
      ],
    };

  
    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'line', 
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, title, lineColor]); 

  return <canvas ref={chartRef} />;
};

export default LineCart;

