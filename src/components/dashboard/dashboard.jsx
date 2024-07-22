import React from 'react';
import Chart from 'react-apexcharts';
import sales_icon from '../../assets/sales1.png'
import income_icon from '../../assets/in.png'
import expense_icon from '../../assets/expense.png'

import Croissants from '../../assets/Croissants.jpg'
import Chocolate_Chip_Cookies from '../../assets/Chocolate Chip Cookies.jpg'
import Sourdough_Bread from '../../assets/Sourdough Bread.jpg'
import Red_Velvet_Cake from '../../assets/Red Velvet Cake.jpg'
import Apple_Pie from '../../assets/Apple Pie.jpg'








import './dashboard.css'

const Dashboard = () => {
  const totalSalesChartData = {
    options: {
      chart: {
        id: 'total-sales-chart',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        labels:{
          show:false,
        },
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        
      },
      yaxis:{
        labels:{
          show:false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
               colors: ['#BFF6C3']
               },
      grid: {
        show: false,
      },
      colors:['green']
    },
    series: [
      {
        name: 'Total Sales',
        data: [8, 19, 67, 56, 20, 33, 65,72],
      },
    ],
  };

  const revenueChartData = {
    options: {
      chart: {
        id: 'revenue-chart',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        labels:{
          show:false,
        },
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
      yaxis:{
        labels:{
          show:false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
                colors: ['#CAF4FF']
               },
      grid: {
        show: false,
      },
      colors:['#5AB2FF']
    },
    series: [
      {
        name: 'Revenue',
        data: [2000, 3000, 1500, 4000, , 1800,2500, 3500],
      },
    ],
  };

  const expenseChartData = {
    options: {
      chart: {
        id: 'expense-chart',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        labels:{
          show:false,
        },
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
      dataLabels: {
        enabled: false,
      },
      yaxis:{
        labels:{
          show:false,
        },
      },
      fill: {
        colors: ['#FFA38F']
       },
      grid: {
        show: false,
      },
      colors:['orange']
    },
    series: [
      {
        name: 'Expense',
        data: [800, 1200, 500, 1000, 700, 600, 900],
      },
    ],
  };
  const topProductsData = [
    {
      name: 'Croissants',
      img: Croissants,
      review:4.2,
      sales: 120,
      profit:20000,
    },
    {
      name: 'Chocolate Chip Cookies',
      img: Chocolate_Chip_Cookies,
      review:4.6,
      sales: 80,
      profit:12000,
    },
    {
      name: 'Sourdough Bread',
      img: Sourdough_Bread,
      review:4.8,
      sales: 78,
      profit:17000,
    },{
        name: 'Red Velvet Cake',
        img:Red_Velvet_Cake,
        review:4.0,
        sales: 100,
        profit:10000,
      },
      {
        name: 'Apple Pie',
        img:Apple_Pie ,
        review:4.5,
        sales: 84,
        profit:15000,
      },
      

  ];
  const earningChartData = {
    options: {
      chart: {
        id: 'earning-chart',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
    
      fill: {
        colors: ['#5AB2FF'], // Blue color for bars
      },
      grid: {
        show: false,
      },
      colors: ['#5AB2FF'], // Blue color for bars
    },
    series: [
      {
        name: 'Earning',
        data: [800, 1200, 500, 1000, 700, 900, 600],
      },
    ],
  };
  
  const saleByCategoryData = {
    options: {
      chart: {
        id: 'sale-by-category-chart',
        toolbar: {
          show: false,
        },
      },
      labels: ['Cakes', 'Pastries', 'Breads', 'Cookies', 'Muffins', 'Pies'],
      colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      legend: {
        position: 'bottom',
      },
    },
    series: [450, 300, 200, 150, 250, 180],
  };

  


  return (
    
       
    
    
       <div className="app">
       <h1>Dashboard</h1>
       
       <div className="chart">
         <div className="row">
           <div className="image">
 <img src={sales_icon} alt="" style={{width:'60px',height:'60px',margin:'20px' }} />
 <div className="head">
 <p>Total sales</p>
           <h2>36,540$</h2>
 </div>

           </div>
         
           <div className="mixed-chart">
            
       
        <Chart options={totalSalesChartData.options} series={totalSalesChartData.series} type="area" height={150} />
      </div>
      </div>
      <div className="row1">
         <div className="image1">
             <img src={income_icon} alt="" style={{width:'60px',height:'60px',margin:'20px' }} />
             <div className="head1">
               <p>Total Income</p>
               <h2>11,37,800$</h2>
             </div>
           </div>  <div className="mixed-chart1">
      
        
        <Chart options={revenueChartData.options} series={revenueChartData.series} type="area" height={150} />
      </div>
      </div>
     
      <div className="row2">
         <div className="image2">
             <img src={expense_icon} alt="" style={{width:'60px',height:'60px',margin:'20px' }} />
             <div className="head2">
               <p>Total Expenses</p>
               <h2>45,8900$</h2>
             </div>
           </div>  <div className="mixed-chart2">
      
        
        <Chart options={expenseChartData.options} series={expenseChartData.series} type="area" height={150} />
      </div>
    </div>
  </div>
  <div className="j">
    
  <div className="products">
    <h2>TOP PRODUCTS</h2>
    <table style={{ width: '650px', height:'300px',borderCollapse:'collapse'}}>
        <thead>
            <tr>
                <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>Product</th>
               <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>Review</th>
               <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }} >Sold</th>
               <th style={{ padding: '10px', border: '1px solid black',background:' #D0B8A8'  }}>Profit</th>
             </tr>

        </thead>
        <tbody>
            {topProductsData.map((product)=>(
                <tr key={product.name}>
                    <td style={{ padding: '10px', border: '1px solid black' }}><img src={product.img} alt='' style={{width:'50px'}}/>&nbsp;{product.name}
                    </td>
                    <td style={{ padding: '10px', border: '1px solid black' }}>{product.review}</td>
                    <td style={{ padding: '10px', border: '1px solid black' }}>{product.sales}</td>
                    <td style={{ padding: '10px', border: '1px solid black' }}>${product.profit}</td>
                </tr>

            ))}
        </tbody>
    </table>
  </div>
  <div className="row4">
<div className="club1">
  <div className="head4">
    <h3>Sales By Category</h3>
    
  </div>
  <div className="pie-chart">
              <Chart options={saleByCategoryData.options} series={saleByCategoryData.series} type="pie" height={300} />
            </div>
            </div>
            </div>
           
   <div className="row3">
         <div className="club">
             <div className="head2">
               <p>Earnings</p>
               <h2>67,8900$</h2>
             </div>
             
           <div className="bar-chart">
              <Chart options={earningChartData.options} series={earningChartData.series} type="bar" height={300} />
            </div>
      </div>
      </div>
      
  </div>
  </div>
  
 
);
};

export default Dashboard;

