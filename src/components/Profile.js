import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  FormGroup,
  Input,
  Button,
  Form,
  Label
} from "reactstrap";

import arrowDown from '../assets/images/header/arrowDown.svg';
import avatar from '../assets/images/header/avatar.png';
import setting from '../assets/images/header/setting.svg';
import logout from '../assets/images/header/logout.svg';
import profile from '../assets/images/header/profile.svg';
import arrowRight from '../assets/images/header/arrowRight.svg'
import language from '../assets/images/header/language.svg';
import BA from '../assets/images/header/BA.svg';
import TFA from '../assets/images/header/2FA.svg';
import currency from '../assets/images/header/currency.svg';
import email from '../assets/images/header/email.svg';
import key from '../assets/images/header/key.svg';
import delAccount from '../assets/images/header/delete.svg'
import fillEmail from '../assets/images/header/fillEmail.svg'
import fillProfile from '../assets/images/header/fillProfile.svg'
import phone from '../assets/images/header/phone.svg'
import english from '../assets/images/header/english.svg'
import iron from '../assets/images/header/IR.svg'
import pak from '../assets/images/header/PK.svg'
import ps from '../assets/images/header/PS.svg'
import sw from '../assets/images/header/sw.svg'
import lock from '../assets/images/header/lock.svg'

const Profile = () => {
  const [isOpenAccountSetting, setIsOpenAccountSetting] = useState(false);
  const [isAllowBA, setIsAllowBA] = useState(false);
  const [isAllowTFA, setIsAllowTFA] = useState(false);
  const [isAllowEmailNotification, setIsAllowEmailNotification] = useState(false);
  const [isOpenPersonalData, setIsOpenPersonalData] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenCurrency, setIsOpenCurrency] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  return (
    <>
      <Dropdown className="bg-transparent" align="end" offset={[-140, 0]}>
        <Dropdown.Toggle
          className="d-flex justify-content-between align-item-center border-0 px-0 fw-600 bg-transparent fs-30 text-dark dropdown-arrow-hidden"
        >
          <p className='fs-15 fw-400 mt-2 pt-1 d-none d-lg-block'>John Smith</p>
          <img
            src={avatar}
            width={40}
            height={40}
            alt="User Avatar"
            className="cursor-pointer rounded-circle ms-md-2"
          />
          <img
            src={arrowDown}
            width={18}
            height={18}
            alt="Arrow Icon"
            className="cursor-pointer ms-1 ms-md-2 mt-2"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="fs-14 mt-1 mb-0 pe-4 bg-white" onClick={() => setIsOpenAccountSetting(!isOpenAccountSetting)}>
            <p className='fs-18 fw-400 text-color my-1'>
              <img
                src={setting}
                width={22}
                height={22}
                className="me-3"
                alt="icon"
              />
              Account Settings
            </p>
          </Dropdown.Item>
          <hr className='mx-4' />
          <Dropdown.Item className="fs-14 mb-0  bg-white">
            <p className='fs-18 fw-400 mb-1 text-color-red'>
              <img
                src={logout}
                width={22}
                height={22}
                className="me-3"
                alt="icon"
              />
              Logout
            </p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div>
        {/* main canvas for Account Settings */}
        <Offcanvas
          isOpen={isOpenAccountSetting}
          toggle={() => setIsOpenAccountSetting(!isOpenAccountSetting)}
          direction="end"
        >
          <OffcanvasHeader className='border-bottom fs-16' toggle={() => setIsOpenAccountSetting(!isOpenAccountSetting)}>
            Account Settings
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className='text-center'>
              <img
                src={avatar}
                width={80}
                height={80}
                alt="User Avatar"
              />
              <p className='fs-16 fw-600 mt-3'>John Smith</p>
              <div className='d-flex justify-content-between align-item-center border rounded px-2 mx-3 cursor-pointer'
                onClick={() => {
                  setIsOpenAccountSetting(!isOpenAccountSetting)
                  setIsOpenPersonalData(!isOpenPersonalData)
                }}
              >
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={profile}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />
                  Personal Data
                </p>
                <img
                  src={arrowRight}
                  width={15}
                  height={15}
                  alt="User Avatar"
                  className='mt-3'
                />
              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'
                onClick={() => {
                  setIsOpenAccountSetting(!isOpenAccountSetting)
                  setIsOpenLanguage(!isOpenLanguage)
                }}
              >
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={language}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />
                  Language
                </p>
                <img
                  src={arrowRight}
                  width={15}
                  height={15}
                  alt="arrow"
                  className='mt-3'
                />
              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'
                onClick={() => {
                  setIsOpenAccountSetting(!isOpenAccountSetting)
                  setIsOpenCurrency(!isOpenCurrency)
                }}
              >
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={currency}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />


                  Currency
                </p>
                <img
                  src={arrowRight}
                  width={15}
                  height={15}
                  alt="arrow"
                  className='mt-3'
                />
              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'
               onClick={() => {
                setIsOpenAccountSetting(!isOpenAccountSetting)
                setIsOpenPassword(!isOpenPassword)
              }}
              >
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={key}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />
                  Change Password
                </p>
                <img
                  src={arrowRight}
                  width={15}
                  height={15}
                  alt="arrow"
                  className='mt-3'
                />
              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'>
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={BA}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />


                  Biometric Auth
                </p>
                <FormGroup switch >
                  <Input
                    type="switch"
                    checked={isAllowBA}
                    onClick={() => {
                      setIsAllowBA(!isAllowBA);
                    }}
                    className='mt-3'
                  />

                </FormGroup>
              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'>
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={TFA}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />


                  Two Factor Auth
                </p>
                <FormGroup switch >
                  <Input
                    type="switch"
                    checked={isAllowTFA}
                    onClick={() => {
                      setIsAllowTFA(!isAllowTFA);
                    }}
                    className='mt-3'
                  />

                </FormGroup>

              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'>
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={email}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />


                  Email Notification
                </p>


                <FormGroup switch >
                  <Input
                    type="switch"
                    checked={isAllowEmailNotification}
                    onClick={() => {
                      setIsAllowEmailNotification(!isAllowEmailNotification);
                    }}
                    className='mt-3'
                  />

                </FormGroup>
              </div>
              <div className='d-flex justify-content-between border rounded px-2 mx-3 cursor-pointer mt-2'>
                <p className='mt-3 fs-13 fw-500'>
                  <img
                    src={delAccount}
                    width={15}
                    height={15}
                    alt="User Avatar"
                    className='me-2'
                  />
                  Delete Account
                </p>

              </div>

            </div>
          </OffcanvasBody>
        </Offcanvas>
        {/* main canvas for Personal Data */}
        <Offcanvas
          isOpen={isOpenPersonalData}
          toggle={() => setIsOpenPersonalData(!isOpenPersonalData)}
          direction="end"
        >
          <OffcanvasHeader className='border-bottom fs-16' toggle={() => setIsOpenPersonalData(!isOpenPersonalData)}>
            Personal Data
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className='text-center'>
              <img
                src={avatar}
                width={80}
                height={80}
                alt="User Avatar"
              />
              <p className='fs-16 fw-600 mt-3'>John Smith</p>
              <div className='text-center'>
                <Button className=' fw-500 fs-15  btn-light-purple-color border-0 py-2 rounded-4'  > Change</Button>

              </div>
              <Form className="text-start">
                <FormGroup>
                  <Label for="Email" className=' text-color fs-14 fw-500'>E-mail address</Label>
                  <div className="d-flex align-items-center position-relative border px-2 rounded-4">
                    <Input
                      type="email"
                      className="form-control fw-400 fs-12 border-0 ps-4 py-3 shadow-none"
                      id="Email"
                      placeholder="Email"
                    />
                    <img
                      src={fillEmail}
                      height={16}
                      width={16}
                      alt="email icon"
                      className="position-absolute end-0 me-3"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className=' text-color fs-14 fw-500' for="Name">Name</Label>
                  <div className="d-flex align-items-center position-relative border px-2 rounded-4">
                    <Input
                      type="text"
                      className="form-control fw-400 fs-12 border-0 ps-4 py-3 shadow-none"
                      id="Name"
                      placeholder="Name"
                    />
                    <img
                      src={fillProfile}
                      height={16}
                      width={16}
                      alt="email icon"
                      className="position-absolute end-0 me-3"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className=' text-color fs-14 fw-500' for="Phone">Phone No.</Label>
                  <div className="d-flex align-items-center position-relative border px-2 rounded-4">
                    <Input
                      type="text"
                      className="form-control fw-400 fs-12 border-0 ps-4 py-3 shadow-none"
                      id="Phone"
                      placeholder="Phone No."
                    />
                    <img
                      src={phone}
                      height={16}
                      width={16}
                      alt="email icon"
                      className="position-absolute end-0 me-3"
                    />
                  </div>
                </FormGroup>
              </Form>
              <div className='mt-5 pt-5'>
                <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2 px-5 rounded-4'  > Save</Button>
              </div>
            </div>
          </OffcanvasBody>
        </Offcanvas>
        {/* main canvas for Language */}
        <Offcanvas
          isOpen={isOpenLanguage}
          toggle={() => setIsOpenLanguage(!isOpenLanguage)}
          direction="end"
        >
          <OffcanvasHeader className='border-bottom fs-16' toggle={() => setIsOpenLanguage(!isOpenLanguage)}>
            Language
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={english}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                English
              </p>
              <p className='pt-3 fs-11 '>
                (English)
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={iron}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Iran
              </p>
              <p className='pt-3 fs-11 '>
                (فارسی)
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={pak}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Pakistan
              </p>
              <p className='pt-3 fs-11 '>
                (اردو)
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={ps}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                palestine
              </p>
              <p className='pt-3 fs-11 '>
                (فارسی)s
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={english}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                English
              </p>
              <p className='pt-3 fs-11 '>
                (English)
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={iron}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Iran
              </p>
              <p className='pt-3 fs-11 '>
                (فارسی)
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={pak}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Pakistan
              </p>
              <p className='pt-3 fs-11 '>
                (اردو)
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={ps}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                palestine
              </p>
              <p className='pt-3 fs-11 '>
                (فارسی)s
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={english}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                English
              </p>
              <p className='pt-3 fs-11 '>
                (English)
              </p>

            </div>
            <div className='text-center mt-5'>
              <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2 px-5 rounded-4'  > Save</Button>
            </div>
          </OffcanvasBody>
        </Offcanvas>
        {/* main canvas for Currency */}
        <Offcanvas
          isOpen={isOpenCurrency}
          toggle={() => setIsOpenCurrency(!isOpenCurrency)}
          direction="end"
        >
          <OffcanvasHeader className='border-bottom fs-16' toggle={() => setIsOpenCurrency(!isOpenCurrency)}>
            Currency
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={sw}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Switzerland
              </p>
              <p className='pt-3 fs-11 '>
                CHF
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={english}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                English (UK)
              </p>
              <p className='pt-3 fs-11 '>
              GBP
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={pak}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Pakistan
              </p>
              <p className='pt-3 fs-11 '>
              PKR
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={sw}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Switzerland
              </p>
              <p className='pt-3 fs-11 '>
                CHF
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={english}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                English (UK)
              </p>
              <p className='pt-3 fs-11 '>
              GBP
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={pak}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Pakistan
              </p>
              <p className='pt-3 fs-11 '>
              PKR
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={sw}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Switzerland
              </p>
              <p className='pt-3 fs-11 '>
                CHF
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={english}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                English (UK)
              </p>
              <p className='pt-3 fs-11 '>
              GBP
              </p>

            </div>
            <div className='d-flex justify-content-between align-item-center header-badges header-badges-heading rounded px-2 mx-3 cursor-pointer mt-2'>
              <p className='pt-3 fs-13 fw-500 '>
                <img
                  src={pak}
                  width={18}
                  height={18}
                  alt="User Avatar"
                  className='me-2'
                />
                Pakistan
              </p>
              <p className='pt-3 fs-11 '>
              PKR
              </p>

            </div>
            <div className='text-center mt-5'>
              <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2 px-5 rounded-4'  > Save</Button>
            </div>
          </OffcanvasBody>
        </Offcanvas>
         {/* main canvas for Change password */}
         <Offcanvas
          isOpen={isOpenPassword}
          toggle={() => setIsOpenPassword(!isOpenPassword)}
          direction="end"
        >
          <OffcanvasHeader className='border-bottom fs-16' toggle={() => setIsOpenPassword(!isOpenPassword)}>
          Change Password
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className='text-center pb-5 '>
              <Form className="text-start">
                <FormGroup>
                  <Label for="password" className=' text-color fs-14 fw-500'>Password</Label>
                  <div className="d-flex align-items-center position-relative border px-2 rounded-4">
                    <Input
                      type="password"
                      className="form-control fw-400 fs-12 border-0 ps-4 py-3 shadow-none"
                      id="password"
                      placeholder="Enter Password"
                    />
                    <img
                      src={lock}
                      height={16}
                      width={16}
                      alt="email icon"
                      className="position-absolute end-0 me-3"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className=' text-color fs-14 fw-500' for="NewPassword">New Password</Label>
                  <div className="d-flex align-items-center position-relative border px-2 rounded-4">
                    <Input
                      type="password"
                      className="form-control fw-400 fs-12 border-0 ps-4 py-3 shadow-none"
                      id="NewPassword"
                      placeholder="Enter New Password"
                    />
                    <img
                      src={lock}
                      height={16}
                      width={16}
                      alt="email icon"
                      className="position-absolute end-0 me-3"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className=' text-color fs-14 fw-500' for="confirmPassword">Confirm Password</Label>
                  <div className="d-flex align-items-center position-relative border px-2 rounded-4">
                    <Input
                      type="password"
                      className="form-control fw-400 fs-12 border-0 ps-4 py-3 shadow-none"
                      id="confirmPassword"
                      placeholder="Enter Confirm Password"
                    />
                    <img
                      src={lock}
                      height={16}
                      width={16}
                      alt="email icon"
                      className="position-absolute end-0 me-3"
                    />
                  </div>
                </FormGroup>
              </Form>
             
            </div>
            <div className='mt-5 pt-5 d-flex justify-content-center align-item-end'>
                <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2 px-5 rounded-4 mt-5'  > Save</Button>
              </div>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  );
};

export default Profile;
