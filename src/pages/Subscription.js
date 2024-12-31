import React, { useState } from 'react';
import '../assets/style/globals.css';
import Select from "react-select";
import { Dropdown } from "react-bootstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import renewal01 from '../assets/images/renewal01.svg';
import dots from '../assets/images/dots.svg';
import { Link } from 'react-router-dom';

const Subscription = () => {
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

  const [categoriesName, setCategoriesName] = useState([
    { value: "1", label: "category-01" },
    { value: "2", label: "category-02" },
    { value: "3", label: "category-03" },
    { value: "4", label: "category-04" }
  ]);

  const isShowDropdown = () => {
    return (
      <Dropdown className="bg-white" align="end" offset={[-140, 0]}>
        <Dropdown.Toggle
          className=" border-0  bg-white dropdown-arrow-hidden"
        >
          <img src={dots} alt='Options' width={20} height={20} className='text-center'/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="fs-14 pt-2 ps-3 border-bottom bg-white">
            <p className='fs-13 fw-400 text-color'>
              View
            </p>
          </Dropdown.Item>
          <Dropdown.Item className="fs-14 pt-3 ps-3 border-bottom bg-white">
            <p className='fs-13 fw-400 text-color'>
              Edit
            </p>
          </Dropdown.Item>
          <Dropdown.Item className="fs-14 pt-3 ps-3 bg-white">
            <p className='fs-13 fw-400 text-color'>
              Delete
            </p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <div className='container'>
      <p className='page-heading fs-22 fw-300 '>Here you can view and manage all your subscriptions</p>
      <div className='d-flex justify-content-end gap-2 flex-wrap'>
        <Button className='btn-outline-color fw-500 fs-15 py-2' outline onClick={() => setIsAddCategory(!isAddCategory)}>
          <span className='fw-600 fs-15'>+</span> Add Category
        </Button>
        <Link  to="/new-subscription">
        <Button className='fw-500 fs-15 btn-fill-color border-0 py-2'>
          <span className='fw-600 fs-15'>+</span> Add Subscription
        </Button>
        </Link>
      </div>
      <div className='mt-3 border rounded'>
        <Table responsive>
          <thead>
            <tr>
              <th className="table-head-bg text-nowrap ps-5">Subscription</th>
              <th className="table-head-bg text-nowrap">START DATE</th>
              <th className="table-head-bg text-nowrap">RENEWAL DATE</th>
              <th className="table-head-bg text-nowrap">Price</th>
              <th className="table-head-bg text-nowrap">OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(7)].map((_, index) => (
              <tr className='text-nowrap ' key={index}>
                <th scope="row" className='py-3 ps-5'>
                  <img src={renewal01} width={20} height={20} alt='icon' />
                  <span className='fs-16 fw-500'>SignNTrack</span>
                </th>
                <td className='text-muted fs-14 fw-500 py-3'>12/11/2024 07:23</td>
                <td className='text-muted fs-14 fw-500 py-3'>12/11/2024 07:23</td>
                <td className='text-muted fs-14 fw-500 py-3'>$5.56</td>
                <td className='text-start'>{isShowDropdown()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <h2 className='fs-24 fw-600 my-3'>Categories</h2>
      <div className='my-2 border rounded'>
        <Table responsive>
          <thead>
            <tr>
              <th className="table-head-bg text-nowrap ps-5">Name</th>
              <th className="table-head-bg text-nowrap">CREATION DATE</th>
              <th className="table-head-bg text-nowrap">ACTIVE SUBSCRIPTIONS</th>
              <th className="table-head-bg text-nowrap">TOTAL BUDGET</th>
              <th className="table-head-bg text-nowrap">SPENDINGS</th>
              <th className="table-head-bg text-nowrap">OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr className='text-nowrap' key={index}>
                <th scope="row" className='py-3  ps-5'>
                  <p className='fs-16 fw-500'>Entertainment</p>
                </th>
                <td className='text-muted fs-14 fw-500 py-3'>12/11/2024 07:23</td>
                <td className='text-muted fs-14 fw-500 py-3'>20</td>
                <td className='text-muted fs-14 fw-500 py-3'>$556.66</td>
                <td className='text-muted fs-14 fw-500 py-3'>$556.66</td>
                <td className='text-start'>{isShowDropdown()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal isOpen={isAddCategory} toggle={() => setIsAddCategory(!isAddCategory)}>
        <ModalHeader toggle={() => setIsAddCategory(!isAddCategory)} className='border-0'></ModalHeader>
        <ModalBody>
          <h2 className='fs-20 fw-600 text-center mt-0'> Add Category</h2>
          <Form>
            <FormGroup>
              <Label for="name" className='fs-14 fw-500'>Name</Label>
              <Select
                options={categoriesName}
                placeholder="Select Name"
                value={selectedCategoryName}
                isSearchable={true}
                onChange={(selected) => {
                  setSelectedCategoryName(selected);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="budget" className='fs-14 fw-500'>Enter Budget</Label>
              <Input id="budget" name="budget" placeholder="Enter Budget" type="number" />
            </FormGroup>
            <FormGroup className='text-center'>
              <Button className='fw-500 fs-15 btn-fill-color border-0 py-2 px-5 text-center' onClick={() => setIsAddCategory(!isAddCategory)}>Add</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Subscription;
