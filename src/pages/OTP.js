import React, { useState, useCallback, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import OTPInput from "react-otp-input";
import otpBanner from '../assets/images/auth/otpBanner.png';
import logoTitle from '../assets/images/auth/logoTitle.svg';
import { Link } from 'react-router-dom';

function OTP() {
    const [verificationCode, setVerificationCode] = useState(null);
    const [timer, setTimer] = useState(600);

    const resetTimer = function () {
        setTimer(600)
    };
    const timeOutCallback = useCallback(() => {
        if (timer > 0) {
            setTimer((currTimer) => currTimer - 1);
        }
    }, [timer]);

    useEffect(() => {
        const timerId = setTimeout(timeOutCallback, 1000);
        return () => clearTimeout(timerId);
    }, [timeOutCallback]);
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6 '>
                    <div className=' m-lg-5 border bg-white  p-2 p-md-5 my-2 box-shadow-custom'>
                        <div className='text-center mt-5'>
                            <img src={logoTitle} alt='icon' />
                        </div>
                        <h4 className='fs-25 fw-600 mt-5 text-center'>Check Your Email</h4>
                        <p className='text-color fs-14 fw-500 text-center my-4'>We just sent a recovery code</p>

                        <Form>
                            <OTPInput
                                value={verificationCode}
                                className="w-100 flex-grow-1"
                                inputStyle={{
                                    borderBottom: "1.5px solid #969494",
                                    borderTop: "0px",
                                    borderLeft: "0px",
                                    borderRight: "0px",
                                    width: "100%", // Set width to 100%
                                    fontSize: 30,
                                    outline: "none",
                                }}
                                inputClassName="otp-input" // Apply the CSS class here
                                containerStyle={{ gap: "10px" }}
                                onChange={(code) => setVerificationCode(code)}
                                numInputs={6}
                                renderInput={(props) => <input {...props} className="otp-input" />}
                            />


                            <div className="mt-5 text-center  ">
                                <small className="text-muted fs-15 fw-400 ">
                                    {timer === 0 ? "" : formatTime(timer)}
                                </small>
                            </div>
                            <div className=' text-center mt-4 mb-5 '>
                                <p className='fs-12 fw-500 text-color '>Didn't get a code? <Link to="" className='text-decoration-none fw-600 text-dark' onClick={() => resetTimer()}>Resend</Link> </p>
                            </div>

                            <div className="d-grid gap-3  ">
                                <Button type='button' className=' fw-500 fs-15  btn-fill-color border-1 border-white py-2'  > Reset Password</Button>
                            </div>
                        </Form>
                    </div>

                </div>
                <div className='col-12 col-lg-6 d-none d-lg-block'>
                    <div className='position-relative d-flex justify-content-center align-items-end vh-100' >
                        <div className='text-center'>
                            <img src={otpBanner} alt='banner01' className='h-75 w-75' />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default OTP;
