import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import resetBanner from '../assets/images/auth/resetBanner.png';
import logoTitle from '../assets/images/auth/logoTitle.svg';
import eye from '../assets/images/auth/eye.svg'
import crossEye from '../assets/images/auth/cross-eye.svg'

function ResetPassword() {
    const [isViewPassword, setIsViewPassword] = useState(false);
    const [isViewConfirmPassword, setIsViewConfirmPassword] = useState(false);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6 '>
                    <div className=' m-lg-5 border bg-white  p-2 p-md-5 my-2 '>
                        <div className='text-center mt-4'>
                            <img src={logoTitle} alt='icon' />
                        </div>
                        <h4 className='fs-25 fw-600 mt-5 text-center'>Reset Your Password</h4>
                        <p className='text-color fs-14 fw-500 text-center my-4'>Here’s a tip: Use a combination of numbers, uppercase,<br /> lowercase and special characters</p>

                        <Form>
                            <FormGroup >
                                <div className="position-relative border-0 border-bottom mb-5">
                                    <Input
                                        type={isViewPassword ? "text" : "password"}
                                        className="form-control mt-2 fw-400 pb-2 shadow-none border-0 ps-0"
                                        placeholder="New Password"
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

                            <div className="d-grid gap-3  my-5">
                                <Button type='button' className=' fw-500 fs-15  btn-fill-color border-1 border-white py-2'  > Send Recovery Link</Button>

                            </div>



                        </Form>
                    </div>

                </div>
                <div className='col-12 col-lg-6 d-none d-lg-block'>
                    <div className='position-relative d-flex justify-content-center align-items-end vh-100' >
                        <div className='text-center'>
                            <img src={resetBanner} alt='banner01' className='h-75 w-75' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default ResetPassword;
