import React, { useState } from 'react';
import '../assets/style/globals.css';
import Select from "react-select";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,

} from 'reactstrap';
const Contact = () => {
  const [selectedIssue, setSelectedIssue] = useState('')
  const [issues, setIssues] = useState([
    { value: "1", label: "issue-01" },
    { value: "2", label: "issue-02" },
    { value: "3", label: "issue-03" },
    { value: "4", label: "issue-04" }]);

  return (
    <>
      <p className='text-color  fs-20 fw-400'>Need help? Contact our friendly support team for assistance <br /> with any inquiries or issues.</p>
      <h2 className='fs-20 fw-600 mt-2'> Generate Ticket</h2>
      <h2 className='fs-16 fw-600 mt-2 dark-purple'> Ticket ID: FAWER123456</h2>
      <Form>
        <div className="row mt-2">
          <div className="col-8">
            <FormGroup>
              <Label for="name" className='fs-14 fw-500'>
                Issues
              </Label>
              <Select
                options={issues}
                placeholder="Select Issue"
                value={selectedIssue}
                isSearchable={true}
                onChange={(selected) => {
                  setSelectedIssue(selected)
                }}
              />
            </FormGroup>
          </div>

        </div>
        <div className="row mt-2">
          <div className="col-8">
            <FormGroup>
              <Label for="subject" className='fs-14 fw-500'>
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Enter Subject"
                type="text"
              />
            </FormGroup>
          </div>

        </div>
        <div className="row mt-2">
          <div className="col-8">
          <FormGroup>
              <Label for="description" className='fs-14 fw-500'>
                Description
              </Label>
              <Input
                id="description"
                name="text"
                type="textarea"
                placeholder='Enter Description'
                rows="8" 
              />
            </FormGroup>
          </div>

        </div>
        <div className="row mt-2">
          <div className="col-8 text-end">
          <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2 px-5'  > Save</Button>

          </div>

        </div>

      </Form>
      
    </>
  );
};

export default Contact;
