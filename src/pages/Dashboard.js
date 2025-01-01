import React from 'react';
import '../assets/style/globals.css';
import '../assets/style/dashboard.css';
import { Card, CardBody } from "reactstrap"
import renewal01 from '../assets/images/renewal01.svg'
import renewal02 from '../assets/images/renewal02.svg'
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, ArcElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);


const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Entertainment',
        data: [100, 120, 140, 180, 200, 230, 280, 300, 325, 360, 380, 420],
        borderColor: '#4c6ef5',
        backgroundColor: 'rgba(10, 55, 233, 0.9)', 
        fill: true,  
        tension: 1,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Transportation',
        data: [400, 425, 450, 460, 475, 495, 520, 535, 550, 575, 595, 600],
        borderColor: '#03E4E7',
        backgroundColor: 'rgba(3, 228, 231, 0.3)', 
        fill: true,  
        tension: 1,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Security',
        data: [600, 625, 650, 700, 725, 775, 700, 725, 750, 800, 850, 820],
        borderColor: '#da77f2',
        backgroundColor: 'rgba(218, 119, 242, 0.3)', 
        fill: true,  
        tension: 1,
        borderWidth: 2,
        pointRadius: 0,
      }
    ]
  };

 const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 5,
        boxHeight: 5,
        padding: 10,
        color: '#475467',
        generateLabels: (chart) => {
          const labels = chart.data.datasets.map((dataset, index) => ({
            text: dataset.label,
            fillStyle: dataset.borderColor,
            strokeStyle: 'transparent', // Ensuring no border color
            borderWidth: 0, // Ensuring no border width
            hidden: !chart.isDatasetVisible(index),
            datasetIndex: index,
          }));
          return labels;
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#475467',
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        padding: 30,
      },
      title: {
        display: true,
        text: 'Months',
        color: '#475467',
        font: {
          size: 13,
        },
        padding: { top: 0, left: 0, right: 0, bottom: 0 },
      },
    },
    y: {
      grid: {
        color: '#e5e5e5',
      },
      ticks: {
        stepSize: 200,
        color: '#475467',
        beginAtZero: true,
        min: 0,
        max: 10000,
      },
      title: {
        display: true,
        text: 'Amount Spent',
        color: '#475467',
        font: {
          size: 13,
        },
        padding: { top: 0, left: 0, right: 0, bottom: 10 },
      },
    },
  },
};


  const donutChartData = {
    labels: ["Transportation", "Entertainment", "Security", "Pending"],
    datasets: [
      {
        data: [5, 8, 11, 20],
        backgroundColor: ['#03E4E7', '#758AFF', '#DC23FF', "#4E4E61"],
        borderWidth: 0,
      },
    ],
  };

  const donutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    cutout: '90%',
    rotation: 240,
  };

  return (
    <div className='container'>
      <p className='page-heading fs-20'>"Gain valuable insights into your subscription usage and spending habits <br /> with our powerful analytics tool."</p>
      <div className='row mt-4'>
        <div className='col-12 col-md-6 col-lg-4 mb-2 mb-lg-0'>
          <Card className='bg-white box-shadow-custom'>
            <div className='d-flex justify-content-start align-items-center'>
              <div>
                <p className='rounded-circle-number bg-light-purple dark-purple ms-4 me-3 mt-3'>22</p>
              </div>
              <div className=''>
                <p className='text-color fs-17 fw-500 mb-0 '>Total</p>
                <p className='text-color fs-17 fw-500 m-0'>Subscriptions</p>
              </div>
            </div>
          </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 mb-2 mb-lg-0'>
          <Card
            className='bg-white box-shadow-custom'
          >
            <div className='d-flex justify-content-start align-items-center'>
              <div>
                <p className='rounded-circle-number bg-light-purple dark-purple ms-4 me-3 mt-3'>22</p>
              </div>
              <div className=''>
                <p className='text-color fs-17 fw-500 mb-0 '>Due</p>
                <p className='text-color fs-17 fw-500 m-0'>Subscriptions</p>
              </div>
            </div>

          </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 mb-2 mb-lg-0'>
          <Card
            className='bg-white box-shadow-custom'
          >
            <div className='d-flex justify-content-start align-items-center'>
              <div>
                <p className='rounded-circle-number bg-light-purple dark-purple ms-4 me-3 mt-3'>22</p>
              </div>
              <div className=''>
                <p className='text-color fs-17 fw-500 mb-0 '>Paid</p>
                <p className='text-color fs-17 fw-500 m-0'>Subscriptions</p>
              </div>
            </div>

          </Card>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-4 mb-2 mb-lg-0'>
          <Card className='bg-white box-shadow-custom' >
            <CardBody style={{ height: '310px' }} className='pt-4'>
              <div style={{ position: 'relative', height: '250px' }}>
                <Doughnut
                  data={donutChartData}
                  options={donutChartOptions}
                  height={250}
                  width="100%"
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className='fs-30 fw-700 text-dark text-center'>$820.97</div>
                <div className='fs-15 fw-400 text-color-light'>of $2,000 amount paid</div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='col-12  col-lg-8 mb-2 mb-lg-0'>
          <Card className='bg-white box-shadow-custom '>
            <CardBody >
              <Line
                data={data}
                options={options}
                height={275}
                width="100%"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <h2 className='fs-24 fw-600 my-3'>Upcoming Renewals</h2>
      <div className='container'>
        <div className='row border rounded px-1 py-2 box-shadow-custom bg-white'>
          <div className='col-12 col-md-10 d-flex flex-wrap align-items-center text-start'>
            <img src={renewal01} alt='icon' className='me-1' />
            <p className='mx-3  fs-15 fw-600 mb-0'>SignNTrack</p>
            <p className=' text-color mt-3 ms-4 fs-12'>Due Date:18.04.2024</p>
          </div>
          <div className='col-12 col-md-2 text-end'>
            <p className='mt-2 fs-15 fw-600 mt-3'>$5.99</p>
          </div>
        </div>
        <div className='row border rounded px-1 py-2 mt-2 mb-4 box-shadow-custom bg-white'>
          <div className='col-12 col-md-10 d-flex flex-wrap align-items-center text-start'>
            <img src={renewal02} alt='icon' className='me-1' />
            <p className='mx-2  fs-15 fw-600 mb-0'>SignNTrack</p>
            <p className='text-color mt-3 ms-4 fs-12'>Due Date:18.04.2024</p>
          </div>
          <div className='col-12 col-md-2 text-end'>
            <p className='mt-2 fs-15 fw-600 mt-3'>$5.99</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
