import React, { useState } from 'react';
import '../assets/style/globals.css';
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
import { Chart } from "react-google-charts";
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
    lineWidth: 2,
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
    <>
      <p className='page-heading fs-22 fw-300 '>Take control of your budget with clear insights into your spending habits.</p>
      <div className='d-flex justify-content-between flex-wrap'>
        <div className='d-flex w-50 border ps-2 rounded mb-2'>
          <img src={darkCheck} alt='' width={20} height={20} className='mt-3' />
          <p className='fs-15 ms-2 mt-3 fw-500'>Your budgets are on track</p>
        </div>
        <div>
          <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2'  ><img src={exportIcon} alt='' className='me-2' /> Export Report</Button>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-4'>
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
               <div className='fs-30 fw-700 text-dark'>$820.97</div>
               <div className='fs-15 fw-400 text-color'>of $2,000 budget</div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='col-12  col-lg-8'>
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
      <h2 className='fs-24 fw-600 my-4'>Categories</h2>
      <div className="row g-3 mb-5">
        <div className=" col-12 col-md-6 col-lg-3 d-flex " >
          <div className="border rounded text-center px-3 pb-3 pt-5 w-100 " onClick={() => setIsAddCategory(!isAddCategory)}>
            <div className="budget-icon my-2">
              <img src={addIcon} alt="add icon" className="w-50" />
            </div>
            <h5 className=" fs-18 mt-3">Add new category</h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex ">
          <div className="border rounded text-center p-3 transport w-100">
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
          <div className="border rounded text-center p-3 entertainment w-100">
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
          <div className="border rounded text-center p-3 security w-100">
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
              <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2  px-5 text-center' onClick={() => setIsAddCategory(!isAddCategory)}>Add</Button>

            </FormGroup>

          </Form>
        </ModalBody>

      </Modal>
    </>
  );
};

export default Dashboard;
