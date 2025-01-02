import React, { useState } from 'react';
import '../assets/style/globals.css';
import '../assets/style/dashboard.css';

import Select from "react-select";
import {
  Card,
  CardBody,
  Progress,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import addIcon from '../assets/images/Add.png'
import carIcon from '../assets/images/car.png'
import fingerIcon from '../assets/images/finger.png'
import starsIcon from '../assets/images/stars.png'
import darkCheck from '../assets/images/subscriptionCheckDark.svg'
import exportIcon from '../assets/images/export.svg'


const Dashboard = () => {
  const [isAddCategory, setIsAddCategory] = useState(false)
  const [selectedCategoryName, setSelectedCategoryName] = useState('')

  const [categoriesName, setCategoriesName] = useState([
    { value: "1", label: "category-01" },
    { value: "2", label: "category-02" },
    { value: "3", label: "category-03" },
    { value: "4", label: "category-04" }]);
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Entertainment',
          data: [100, 120, 140, 180, 200, 230, 280, 300, 325, 360, 380, 420],
          borderColor: '#4c6ef5',
          backgroundColor: 'rgba(76, 110, 245, 0.1)',
          fill: true,
          tension: 1,
          borderWidth: 2,
          pointRadius: 0,
        },
        {
          label: 'Transportation',
          data: [400, 425, 450, 460, 475, 495, 520, 535, 550, 575, 595, 600],
          borderColor: '#03E4E7',
          backgroundColor: 'rgba(3, 228, 231, 0.1)',
          fill: true,
          tension: 1,
          borderWidth: 2,
          pointRadius: 0,
        },
        {
          label: 'Security',
          data: [600, 625, 650, 700, 725, 775, 700, 725, 750, 800, 850, 820],
          borderColor: '#da77f2',
          backgroundColor: 'rgba(218, 119, 242, 0.1)',
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
    <>
      <p className='page-heading fs-20  '>Take control of your budget with clear insights into your spending habits.</p>
      <div className='d-flex justify-content-between flex-wrap'>
        <div className='d-flex  w-md-50 border ps-2 rounded mb-2'>
          <img src={darkCheck} alt='' width={20} height={20} className='mt-3' />
          <p className='fs-15 ms-2 mt-3 fw-500'>Your budgets are on track</p>
        </div>
        <div>
          <Button type='button' className=' fw-500 fs-15 btn-fill-color border-1 border-white py-2'  ><img src={exportIcon} alt='' className='me-2' /> Export Report</Button>
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
                    <div className='fs-15 fw-400 text-color-light'>of $2,000 budget</div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className='col-12  col-lg-8 mb-2 mb-lg-0'>
            
              <Card className='bg-white box-shadow-custom'>
                          <CardBody>
                            <div className="chart-wrapper">
                              <div className="chart-container">
                                <Line
                                  data={data}
                                  options={options}
                                  height={275}
                                  width="100%"
                                />
                              </div>
                            </div>
                          </CardBody>
                        </Card>
    
            </div>
    
          </div>
      <h2 className='fs-24 fw-600 my-4'>Categories</h2>
      <div className="row g-3 mb-5">
        <div className=" col-12 col-md-6 col-lg-3 d-flex  " >
          <div className="border rounded text-center px-3 pb-3 pt-5 w-100 box-shadow-custom bg-white cursor-pointer" onClick={() => setIsAddCategory(!isAddCategory)}>
            <div className="budget-icon my-2">
              <img src={addIcon} alt="add icon" className="w-50" />
            </div>
            <h5 className=" fs-18 mt-3">Add new category</h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex  ">
          <div className="border rounded text-center p-3 transport w-100 box-shadow-custom bg-white">
            <div className="budget-icon my-2">
              <img src={carIcon} alt="car" className="w-50" />
            </div>
            <h5 className=" fs-18">Auto & Transport</h5>
            <p className=" text-color fs-14">$375 left to spend</p>
            <Progress
              value={50}
            />
            <p className=" text-color fs-14 mt-2">$25.99 of $400</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex ">
          <div className="border rounded text-center p-3 entertainment w-100 box-shadow-custom bg-white">
            <div className="budget-icon my-2">
              <img src={starsIcon} alt="stars" className="w-50" />
            </div>
            <h5 className=" fs-18">Entertainment</h5>
            <p className=" text-color fs-14">$375 left to spend</p>
            <Progress
              value={50}
            />
            <p className=" text-color fs-14 mt-2">$50.99 of $600</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex ">
          <div className="border rounded text-center p-3 security w-100 box-shadow-custom bg-white">
            <div className="budget-icon my-2">
              <img src={fingerIcon} alt="finger" className="w-50" />
            </div>
            <h5 className=" fs-18">Security</h5>
            <p className=" text-color fs-14">$375 left to spend</p>
            <Progress
              value={50}
            />
            <p className=" text-color fs-14 mt-2">$5.99 of $600</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isAddCategory} toggle={() => setIsAddCategory(!isAddCategory)} >
        <ModalHeader toggle={() => setIsAddCategory(!isAddCategory)} className='border-0'></ModalHeader>
        <ModalBody>
          <h2 className='fs-20 fw-600 text-center  mt-0'> Add Category</h2>
          <Form>
            <FormGroup>
              <Label for="name" className='fs-14 fw-500'>
                Name
              </Label>
              <Select
                options={categoriesName}
                //  styles={customStyles}
                placeholder="Select Name"
                value={selectedCategoryName}
                isSearchable={true}
                onChange={(selected) => {
                  setSelectedCategoryName(selected)
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="budget" className='fs-14 fw-500'>
                Enter Budget
              </Label>
              <Input
                id="budget"
                name="budget"
                placeholder="Enter Budget"
                type="number"
              />
            </FormGroup>
            <FormGroup className='text-center'>
              <Button type='button' className=' fw-500 fs-15  btn-fill-color border-1 border-white py-2  px-5 text-center' onClick={() => setIsAddCategory(!isAddCategory)}>Add</Button>

            </FormGroup>

          </Form>
        </ModalBody>

      </Modal>
    </>
  );
};

export default Dashboard;
