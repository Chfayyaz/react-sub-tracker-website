import React from 'react';
import '../assets/style/globals.css';
import '../assets/style/dashboard.css';
import { Card, CardBody } from "reactstrap"
import { Chart } from "react-google-charts";
import renewal01 from '../assets/images/renewal01.svg'
import renewal02 from '../assets/images/renewal02.svg'

const Dashboard = () => {

  const LineChartData = [
    ["Month", "Entertainment", "Transportation", "Security"],
    ["Jan", 800, 600, 700],
    ["Feb", 850, 620, 740],
    ["Mar", 810, 630, 690],
    ["Apr", 880, 640, 750],
    ["May", 830, 660, 680],
    ["Jun", 900, 670, 760],
    ["Jul", 800, 680, 720],
    ["Aug", 920, 690, 780],
    ["Sep", 780, 700, 690],
    ["Oct", 950, 710, 800],
    ["Nov", 760, 730, 680],
    ["Dec", 1000, 740, 820],
  ];
  
  const LineChartOptions = {
    chart: {
      title: "Amount Spent",
    },
    curveType: "function", // Smooths the lines
    lineWidth: 2,
    colors: ['#758AFF', '#03E4E7', '#DC23FF'], // Colors for the lines
    legend: {
      position: "top",
      maxLines: 3,
    },
    hAxis: {
      title: 'Months',
      slantedText: false, 
    },
    vAxis: {
      title: 'Amount Spent',
    },
  };

  const dountChartData = [
    ["Task", "Hours per Day"],
    ["Transportation", 5],
    ["Entertainment", 8],
    ["Security", 11],
    ["Pending", 20],
  ];

  const dountChartOptions = {
    pieHole: 0.9,
    is3D: false,
    legend: { position: 'none' },
    pieStartAngle: 240,
    colors: ['#03E4E7', '#758AFF', '#DC23FF', "#4E4E61"],
    pieSliceText: 'none',
    chartArea: {
      left: '10%',
      top: '10%',
      width: '80%',
      height: '80%',
    },
  };
  return (
    <div className='container'>
      <p className='page-heading fs-22 fw-300 '>"Gain valuable insights into your subscription usage and spending habits <br /> with our powerful analytics tool."</p>
      <div className='row'>
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
          <Card className='bg-white  box-shadow-custom'>
            <CardBody className='position-relative text-center' >
              <Chart
                chartType="PieChart"
                width="100%"
                height="300px"
                data={dountChartData}
                options={dountChartOptions}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
                <div className='fs-30 fw-700 text-dark'>$820.97</div>
                <div className='fs-15 fw-400 text-color'>of $2,000 amount paid</div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='col-12  col-lg-8 mb-2 mb-lg-0'>
          <Card className='bg-white box-shadow-custom'>
            <CardBody className='overflow-auto chart-scrollbar'>
              <Chart
                width="750px"
                height="300px"
                chartType="LineChart"
                data={LineChartData}
                options={LineChartOptions}
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
