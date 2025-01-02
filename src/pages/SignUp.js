import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import banner01 from '../assets/images/auth/banner01.png'; 
import banner02 from '../assets/images/auth/banner02.png'; 
import eye from '../assets/images/auth/eye.svg'
import crossEye from '../assets/images/auth/cross-eye.svg'
import apple from '../assets/images/auth/Apple.svg'
import google from '../assets/images/auth/google.svg'

import { Link } from 'react-router-dom';

function SignUp() {
    const [isViewPassword, setIsViewPassword] = useState(false);
    const [isViewConfirmPassword, setIsViewConfirmPassword] = useState(false);

    return (
        <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6 d-none d-lg-block'>
                <div className='position-relative d-flex justify-content-center align-items-center vh-100' >
                    <div className='text-center'>
                        <img src={banner01} alt='banner01' width={400} />
                    </div>
                    <div className='position-absolute bottom-0 start-0'>
                        <img src={banner02} alt='banner02' width={200} />
                    </div>
                </div>
            </div>

            <div className='col-12 col-lg-6 '>
                    <div className=' m-lg-5 border bg-white  p-5'>
                        <div className='d-block d-lg-none  text-center'>
                            <img src={banner01} alt='banner01' className='img-fluid' />
                        </div>
                    <h4 className='fs-25 fw-600 mt-5 text-center'>Create an Account</h4>
                    <p className='text-color fs-14 fw-500 text-center mt-2'>Welcome! Please enter your details</p>
                    <Form>
                        <FormGroup >
                            <Label className="visually-hidden" for="Email">
                                Email
                            </Label>
                            <Input
                                id="Email"
                                name="email"
                                placeholder="Email"
                                className='shadow-none border-0 border-bottom rounded-0 ps-0'
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup >
                            <div className="position-relative border-0 border-bottom">
                                <Input
                                    type={isViewPassword ? "text" : "password"}
                                    className="form-control mt-2 fw-400 pb-2 shadow-none border-0 ps-0"
                                    placeholder="Password"
                                />
                                <div className="position-absolute top-0 end-0 pt-2">
                                    <img
                                        src={isViewPassword ? crossEye : eye}
                                        height={16}
                                        width={16}
                                        className="cursor-pointer"
                                        onClick={() => setIsViewPassword(!isViewPassword)}
                                        alt=""
                                    />

                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup >
                            <div className="position-relative border-0 border-bottom">
                                <Input
                                    type={isViewConfirmPassword ? "text" : "password"}
                                    className="form-control mt-2 fw-400 pb-2 shadow-none border-0 ps-0"
                                    placeholder="Confirm Password"
                                />
                                <div className="position-absolute top-0 end-0 pt-2">
                                    <img
                                        src={isViewConfirmPassword ? crossEye : eye}
                                        height={16}
                                        width={16}
                                        className="cursor-pointer"
                                        onClick={() => setIsViewConfirmPassword(!isViewConfirmPassword)}
                                        alt=""
                                    />

                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup check inline className='mt-3 mb-2'>
                            <Input type="checkbox" />
                            <Label check className='fs-13 fw-500 mb-2'>
                                By proceeding, you agree to our <Link to="" className='dark-purple'>Privacy Policy</Link>  and <Link to="" className='dark-purple'>Term of Use.</Link>
                            </Label>
                        </FormGroup>
                        <div className="d-grid gap-3">
                            <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2'  > Sign Up</Button>
                            <Button className=' fw-500 fs-15 py-2 text-dark ' outline  > <img src={google} width={20} height={20} alt='icon' className='me-1' /> Sign In with Google</Button>
                            <Button className=' fw-500 fs-15   border-0 py-2' color="dark"  ><img src={apple} width={20} height={20} alt='icon' className='me-1' /> Sign In with Apple</Button>

                        </div>

                        <div className='mt-2 text-center mt-3 '>
                            <p className='fs-12 fw-500 text-color '>Already have an account?  <Link to="/sign-in" className='text-decoration-none fs-13 fw-600 text-dark'>SIGN IN</Link>  </p>
                        </div>

                    </Form>
                </div>

            </div>
        </div>
        </div>
    );
}

export default SignUp;
