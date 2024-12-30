import React from 'react';
import '../assets/style/globals.css';
import { Card, CardBody } from "reactstrap"
import { Chart } from "react-google-charts";
import renewal01 from '../assets/images/renewal01.svg'
import renewal02 from '../assets/images/renewal02.svg'

const Dashboard = () => {

  const LineChartData = [
    ["Month", "Entertainment", "Transportation", "Security"],
    ["Jan", 1200, 800, 1000],
    ["Feb", 1250, 820, 1020],
    ["Mar", 1150, 840, 980],
    ["Apr", 1300, 860, 1040],
    ["May", 1100, 880, 960],
    ["Jun", 1350, 900, 1060],
    ["Jul", 1050, 920, 940],
    ["Aug", 1400, 940, 1080],
    ["Sep", 1000, 960, 920],
    ["Oct", 1450, 980, 1100],
    ["Nov", 950, 1000, 900],
    ["Dec", 1500, 1020, 1120],
  ];

  const LineChartOptions = {
    chart: {
      title: "Amount Spent",
    },
    curveType: "function", // Smooths the lines
    lineWidth: 3,
    colors: ['#758AFF', '#03E4E7', '#DC23FF'], // Colors for the lines
    legend: {
      position: "top",
      maxLines: 3,
    },
    hAxis: {
      title: 'Months',
      slantedText: false,
      slantedTextAngle: 45, // Adjust the angle as needed for better visibility
      viewWindow: {
        min: 0,
        max: 12, // Adjust based on the number of months to remove extra space
      },
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
      <p className='text-color  fs-20 fw-400'>"Gain valuable insights into your subscription usage and spending habits <br /> with our powerful analytics tool."</p>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4 mb-2 mb-lg-0'>
          <Card className='bg-white'>
            <CardBody className='d-flex justify-content-center align-items-center'>
              <div>
                <p className='rounded-circle-number bg-light-purple dark-purple me-2'>22</p>
              </div>
              <div className='mb-4'>
                <p className='text-color fs-12 fw-500 my-1 '>Total</p>
                <p className='text-color fs-12 fw-500 m-0'>Subscriptions</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 mb-2 mb-lg-0'>
          <Card
            className='bg-white '
          >
            <CardBody className='d-flex justify-content-center'>
              <div>
                <p className='rounded-circle-number bg-light-purple dark-purple me-2'>25</p>
              </div>
              <div className='mb-4'>
                <p className='text-color fs-12 fw-500 my-1 '>Due  </p>
                <p className='text-color fs-12 fw-500 m-0'>Subscriptions</p>
              </div>
            </CardBody>

          </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 mb-2 mb-lg-0'>
          <Card
            className='bg-white'
          >
            <CardBody className='d-flex justify-content-center'>
              <div>
                <p className='rounded-circle-number bg-light-purple dark-purple me-2'>20</p>
              </div>
              <div className='mb-4'>
                <p className='text-color fs-12 fw-500 my-1 '>Paid </p>
                <p className='text-color fs-12 fw-500 m-0'>Subscriptions</p>
              </div>
              <div>

              </div>

            </CardBody>

          </Card>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-4 mb-2 mb-lg-0'>
          <Card className='bg-white'>
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
                <div className='fs-16 fw-600 text-dark'>$820.97</div>
                <div className='fs-12 fw-400 text-color'>of $2,000 amount paid</div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='col-12  col-lg-8 mb-2 mb-lg-0'>
          <Card className='bg-white'>
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
      <h2 className='fs-20 fw-600 mt-2'>Upcoming Renewals</h2>
      <div className='container'>
  <div className='row border rounded px-1 py-2'>
    <div className='col-12 col-md-10 d-flex flex-wrap align-items-center text-start'>
      <img src={renewal01} alt='icon' className='me-1' />
      <p className='mx-3  fs-15 fw-600 mb-0'>SignNTrack</p>
      <p className=' text-color mt-3 ms-4 fs-12'>Due Date:18.04.2024</p>
    </div>
    <div className='col-12 col-md-2 text-end'>
      <p className='mt-2 fs-15 fw-600'>$5.99</p>
    </div>
  </div>
  <div className='row border rounded px-1 py-2 mt-2 mb-4'>
    <div className='col-12 col-md-10 d-flex flex-wrap align-items-center text-start'>
      <img src={renewal02} alt='icon' className='me-1' />
      <p className='mx-2  fs-15 fw-600 mb-0'>SignNTrack</p>
      <p className='text-color mt-3 ms-4 fs-12'>Due Date:18.04.2024</p>
    </div>
    <div className='col-12 col-md-2 text-end'>
      <p className='mt-2 fs-15 fw-600'>$5.99</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
