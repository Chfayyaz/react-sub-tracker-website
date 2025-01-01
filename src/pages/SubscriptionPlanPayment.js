import React, { useState } from 'react';
import '../assets/style/globals.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import masterCard from '../assets/images/masterCard.svg'
import visaCard from '../assets/images/visaCard.svg'
import checkboxEmpty from '../assets/images/checkboxEmpty.svg'
import checkboxFill from '../assets/images/checkboxFill.svg'
import cardCheckbox from '../assets/images/cardCheckbox.svg'

const SubscriptionPlanPayment = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const [selectedCard, setSelectedCard] = useState(0);
  const [checkedCard, setCheckedCard] = useState("master");


  const handleCardChange = (index) => {
    setSelectedCard(index);
  };

  const cards = [
    {
      id: 1, label: "Credit Card",
      blackIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 169 113" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M147.841 9.3867C150.641 9.3867 153.327 10.3757 155.308 12.136C157.288 13.8964 158.401 16.2839 158.401 18.7734V93.867C158.401 96.3566 157.288 98.7441 155.308 100.504C153.327 102.265 150.641 103.254 147.841 103.254H21.1201C18.3194 103.254 15.6334 102.265 13.653 100.504C11.6726 98.7441 10.56 96.3566 10.56 93.867V18.7734C10.56 16.2839 11.6726 13.8964 13.653 12.136C15.6334 10.3757 18.3194 9.3867 21.1201 9.3867H147.841ZM21.1201 0C15.5187 0 10.1467 1.97791 6.18593 5.4986C2.22515 9.0193 0 13.7944 0 18.7734L0 93.867C0 98.8461 2.22515 103.621 6.18593 107.142C10.1467 110.663 15.5187 112.64 21.1201 112.64H147.841C153.442 112.64 158.814 110.663 162.775 107.142C166.736 103.621 168.961 98.8461 168.961 93.867V18.7734C168.961 13.7944 166.736 9.0193 162.775 5.4986C158.814 1.97791 153.442 0 147.841 0H21.1201Z"
          fill="black" className="svg-path" />
        <path
          d="M21.1201 32.8535C21.1201 31.6088 21.6764 30.415 22.6666 29.5348C23.6568 28.6546 24.9998 28.1602 26.4001 28.1602H47.5202C48.9206 28.1602 50.2636 28.6546 51.2538 29.5348C52.244 30.415 52.8002 31.6088 52.8002 32.8535V42.2402C52.8002 43.485 52.244 44.6787 51.2538 45.5589C50.2636 46.4391 48.9206 46.9336 47.5202 46.9336H26.4001C24.9998 46.9336 23.6568 46.4391 22.6666 45.5589C21.6764 44.6787 21.1201 43.485 21.1201 42.2402V32.8535ZM21.1201 61.0136C21.1201 59.7689 21.6764 58.5751 22.6666 57.6949C23.6568 56.8147 24.9998 56.3203 26.4001 56.3203H79.2004C80.6007 56.3203 81.9437 56.8147 82.9339 57.6949C83.9241 58.5751 84.4804 59.7689 84.4804 61.0136C84.4804 62.2584 83.9241 63.4522 82.9339 64.3323C81.9437 65.2125 80.6007 65.707 79.2004 65.707H26.4001C24.9998 65.707 23.6568 65.2125 22.6666 64.3323C21.6764 63.4522 21.1201 62.2584 21.1201 61.0136ZM21.1201 79.787C21.1201 78.5423 21.6764 77.3485 22.6666 76.4683C23.6568 75.5882 24.9998 75.0937 26.4001 75.0937H36.9602C38.3605 75.0937 39.7035 75.5882 40.6937 76.4683C41.6839 77.3485 42.2402 78.5423 42.2402 79.787C42.2402 81.0318 41.6839 82.2256 40.6937 83.1057C39.7035 83.9859 38.3605 84.4804 36.9602 84.4804H26.4001C24.9998 84.4804 23.6568 83.9859 22.6666 83.1057C21.6764 82.2256 21.1201 81.0318 21.1201 79.787ZM52.8002 79.787C52.8002 78.5423 53.3565 77.3485 54.3467 76.4683C55.3369 75.5882 56.6799 75.0937 58.0803 75.0937H68.6403C70.0407 75.0937 71.3836 75.5882 72.3738 76.4683C73.364 77.3485 73.9203 78.5423 73.9203 79.787C73.9203 81.0318 73.364 82.2256 72.3738 83.1057C71.3836 83.9859 70.0407 84.4804 68.6403 84.4804H58.0803C56.6799 84.4804 55.3369 83.9859 54.3467 83.1057C53.3565 82.2256 52.8002 81.0318 52.8002 79.787ZM84.4804 79.787C84.4804 78.5423 85.0367 77.3485 86.0268 76.4683C87.017 75.5882 88.36 75.0937 89.7604 75.0937H100.32C101.721 75.0937 103.064 75.5882 104.054 76.4683C105.044 77.3485 105.6 78.5423 105.6 79.787C105.6 81.0318 105.044 82.2256 104.054 83.1057C103.064 83.9859 101.721 84.4804 100.32 84.4804H89.7604C88.36 84.4804 87.017 83.9859 86.0268 83.1057C85.0367 82.2256 84.4804 81.0318 84.4804 79.787ZM116.16 79.787C116.16 78.5423 116.717 77.3485 117.707 76.4683C118.697 75.5882 120.04 75.0937 121.441 75.0937H132.001C133.401 75.0937 134.744 75.5882 135.734 76.4683C136.724 77.3485 137.281 78.5423 137.281 79.787C137.281 81.0318 136.724 82.2256 135.734 83.1057C134.744 83.9859 133.401 84.4804 132.001 84.4804H121.441C120.04 84.4804 118.697 83.9859 117.707 83.1057C116.717 82.2256 116.16 81.0318 116.16 79.787Z"
          fill="black" className="svg-path" />
      </svg>),
      whiteIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 169 113" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M147.841 9.3867C150.641 9.3867 153.327 10.3757 155.308 12.136C157.288 13.8964 158.401 16.2839 158.401 18.7734V93.867C158.401 96.3566 157.288 98.7441 155.308 100.504C153.327 102.265 150.641 103.254 147.841 103.254H21.1201C18.3194 103.254 15.6334 102.265 13.653 100.504C11.6726 98.7441 10.56 96.3566 10.56 93.867V18.7734C10.56 16.2839 11.6726 13.8964 13.653 12.136C15.6334 10.3757 18.3194 9.3867 21.1201 9.3867H147.841ZM21.1201 0C15.5187 0 10.1467 1.97791 6.18593 5.4986C2.22515 9.0193 0 13.7944 0 18.7734L0 93.867C0 98.8461 2.22515 103.621 6.18593 107.142C10.1467 110.663 15.5187 112.64 21.1201 112.64H147.841C153.442 112.64 158.814 110.663 162.775 107.142C166.736 103.621 168.961 98.8461 168.961 93.867V18.7734C168.961 13.7944 166.736 9.0193 162.775 5.4986C158.814 1.97791 153.442 0 147.841 0H21.1201Z"
          fill="white" className="svg-path" />
        <path
          d="M21.1201 32.8535C21.1201 31.6088 21.6764 30.415 22.6666 29.5348C23.6568 28.6546 24.9998 28.1602 26.4001 28.1602H47.5202C48.9206 28.1602 50.2636 28.6546 51.2538 29.5348C52.244 30.415 52.8002 31.6088 52.8002 32.8535V42.2402C52.8002 43.485 52.244 44.6787 51.2538 45.5589C50.2636 46.4391 48.9206 46.9336 47.5202 46.9336H26.4001C24.9998 46.9336 23.6568 46.4391 22.6666 45.5589C21.6764 44.6787 21.1201 43.485 21.1201 42.2402V32.8535ZM21.1201 61.0136C21.1201 59.7689 21.6764 58.5751 22.6666 57.6949C23.6568 56.8147 24.9998 56.3203 26.4001 56.3203H79.2004C80.6007 56.3203 81.9437 56.8147 82.9339 57.6949C83.9241 58.5751 84.4804 59.7689 84.4804 61.0136C84.4804 62.2584 83.9241 63.4522 82.9339 64.3323C81.9437 65.2125 80.6007 65.707 79.2004 65.707H26.4001C24.9998 65.707 23.6568 65.2125 22.6666 64.3323C21.6764 63.4522 21.1201 62.2584 21.1201 61.0136ZM21.1201 79.787C21.1201 78.5423 21.6764 77.3485 22.6666 76.4683C23.6568 75.5882 24.9998 75.0937 26.4001 75.0937H36.9602C38.3605 75.0937 39.7035 75.5882 40.6937 76.4683C41.6839 77.3485 42.2402 78.5423 42.2402 79.787C42.2402 81.0318 41.6839 82.2256 40.6937 83.1057C39.7035 83.9859 38.3605 84.4804 36.9602 84.4804H26.4001C24.9998 84.4804 23.6568 83.9859 22.6666 83.1057C21.6764 82.2256 21.1201 81.0318 21.1201 79.787ZM52.8002 79.787C52.8002 78.5423 53.3565 77.3485 54.3467 76.4683C55.3369 75.5882 56.6799 75.0937 58.0803 75.0937H68.6403C70.0407 75.0937 71.3836 75.5882 72.3738 76.4683C73.364 77.3485 73.9203 78.5423 73.9203 79.787C73.9203 81.0318 73.364 82.2256 72.3738 83.1057C71.3836 83.9859 70.0407 84.4804 68.6403 84.4804H58.0803C56.6799 84.4804 55.3369 83.9859 54.3467 83.1057C53.3565 82.2256 52.8002 81.0318 52.8002 79.787ZM84.4804 79.787C84.4804 78.5423 85.0367 77.3485 86.0268 76.4683C87.017 75.5882 88.36 75.0937 89.7604 75.0937H100.32C101.721 75.0937 103.064 75.5882 104.054 76.4683C105.044 77.3485 105.6 78.5423 105.6 79.787C105.6 81.0318 105.044 82.2256 104.054 83.1057C103.064 83.9859 101.721 84.4804 100.32 84.4804H89.7604C88.36 84.4804 87.017 83.9859 86.0268 83.1057C85.0367 82.2256 84.4804 81.0318 84.4804 79.787ZM116.16 79.787C116.16 78.5423 116.717 77.3485 117.707 76.4683C118.697 75.5882 120.04 75.0937 121.441 75.0937H132.001C133.401 75.0937 134.744 75.5882 135.734 76.4683C136.724 77.3485 137.281 78.5423 137.281 79.787C137.281 81.0318 136.724 82.2256 135.734 83.1057C134.744 83.9859 133.401 84.4804 132.001 84.4804H121.441C120.04 84.4804 118.697 83.9859 117.707 83.1057C116.717 82.2256 116.16 81.0318 116.16 79.787Z"
          fill="white" className="svg-path" />
      </svg>)
    },
    {
      id: 2, label: "Debit Card",
      blackIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 169 113" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M147.841 9.3867C150.641 9.3867 153.327 10.3757 155.308 12.136C157.288 13.8964 158.401 16.2839 158.401 18.7734V93.867C158.401 96.3566 157.288 98.7441 155.308 100.504C153.327 102.265 150.641 103.254 147.841 103.254H21.1201C18.3194 103.254 15.6334 102.265 13.653 100.504C11.6726 98.7441 10.56 96.3566 10.56 93.867V18.7734C10.56 16.2839 11.6726 13.8964 13.653 12.136C15.6334 10.3757 18.3194 9.3867 21.1201 9.3867H147.841ZM21.1201 0C15.5187 0 10.1467 1.97791 6.18593 5.4986C2.22515 9.0193 0 13.7944 0 18.7734L0 93.867C0 98.8461 2.22515 103.621 6.18593 107.142C10.1467 110.663 15.5187 112.64 21.1201 112.64H147.841C153.442 112.64 158.814 110.663 162.775 107.142C166.736 103.621 168.961 98.8461 168.961 93.867V18.7734C168.961 13.7944 166.736 9.0193 162.775 5.4986C158.814 1.97791 153.442 0 147.841 0H21.1201Z"
          fill="black" className="svg-path" />
        <path
          d="M21.1201 32.8535C21.1201 31.6088 21.6764 30.415 22.6666 29.5348C23.6568 28.6546 24.9998 28.1602 26.4001 28.1602H47.5202C48.9206 28.1602 50.2636 28.6546 51.2538 29.5348C52.244 30.415 52.8002 31.6088 52.8002 32.8535V42.2402C52.8002 43.485 52.244 44.6787 51.2538 45.5589C50.2636 46.4391 48.9206 46.9336 47.5202 46.9336H26.4001C24.9998 46.9336 23.6568 46.4391 22.6666 45.5589C21.6764 44.6787 21.1201 43.485 21.1201 42.2402V32.8535ZM21.1201 61.0136C21.1201 59.7689 21.6764 58.5751 22.6666 57.6949C23.6568 56.8147 24.9998 56.3203 26.4001 56.3203H79.2004C80.6007 56.3203 81.9437 56.8147 82.9339 57.6949C83.9241 58.5751 84.4804 59.7689 84.4804 61.0136C84.4804 62.2584 83.9241 63.4522 82.9339 64.3323C81.9437 65.2125 80.6007 65.707 79.2004 65.707H26.4001C24.9998 65.707 23.6568 65.2125 22.6666 64.3323C21.6764 63.4522 21.1201 62.2584 21.1201 61.0136ZM21.1201 79.787C21.1201 78.5423 21.6764 77.3485 22.6666 76.4683C23.6568 75.5882 24.9998 75.0937 26.4001 75.0937H36.9602C38.3605 75.0937 39.7035 75.5882 40.6937 76.4683C41.6839 77.3485 42.2402 78.5423 42.2402 79.787C42.2402 81.0318 41.6839 82.2256 40.6937 83.1057C39.7035 83.9859 38.3605 84.4804 36.9602 84.4804H26.4001C24.9998 84.4804 23.6568 83.9859 22.6666 83.1057C21.6764 82.2256 21.1201 81.0318 21.1201 79.787ZM52.8002 79.787C52.8002 78.5423 53.3565 77.3485 54.3467 76.4683C55.3369 75.5882 56.6799 75.0937 58.0803 75.0937H68.6403C70.0407 75.0937 71.3836 75.5882 72.3738 76.4683C73.364 77.3485 73.9203 78.5423 73.9203 79.787C73.9203 81.0318 73.364 82.2256 72.3738 83.1057C71.3836 83.9859 70.0407 84.4804 68.6403 84.4804H58.0803C56.6799 84.4804 55.3369 83.9859 54.3467 83.1057C53.3565 82.2256 52.8002 81.0318 52.8002 79.787ZM84.4804 79.787C84.4804 78.5423 85.0367 77.3485 86.0268 76.4683C87.017 75.5882 88.36 75.0937 89.7604 75.0937H100.32C101.721 75.0937 103.064 75.5882 104.054 76.4683C105.044 77.3485 105.6 78.5423 105.6 79.787C105.6 81.0318 105.044 82.2256 104.054 83.1057C103.064 83.9859 101.721 84.4804 100.32 84.4804H89.7604C88.36 84.4804 87.017 83.9859 86.0268 83.1057C85.0367 82.2256 84.4804 81.0318 84.4804 79.787ZM116.16 79.787C116.16 78.5423 116.717 77.3485 117.707 76.4683C118.697 75.5882 120.04 75.0937 121.441 75.0937H132.001C133.401 75.0937 134.744 75.5882 135.734 76.4683C136.724 77.3485 137.281 78.5423 137.281 79.787C137.281 81.0318 136.724 82.2256 135.734 83.1057C134.744 83.9859 133.401 84.4804 132.001 84.4804H121.441C120.04 84.4804 118.697 83.9859 117.707 83.1057C116.717 82.2256 116.16 81.0318 116.16 79.787Z"
          fill="black" className="svg-path" />
      </svg>),
      whiteIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 169 113" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M147.841 9.3867C150.641 9.3867 153.327 10.3757 155.308 12.136C157.288 13.8964 158.401 16.2839 158.401 18.7734V93.867C158.401 96.3566 157.288 98.7441 155.308 100.504C153.327 102.265 150.641 103.254 147.841 103.254H21.1201C18.3194 103.254 15.6334 102.265 13.653 100.504C11.6726 98.7441 10.56 96.3566 10.56 93.867V18.7734C10.56 16.2839 11.6726 13.8964 13.653 12.136C15.6334 10.3757 18.3194 9.3867 21.1201 9.3867H147.841ZM21.1201 0C15.5187 0 10.1467 1.97791 6.18593 5.4986C2.22515 9.0193 0 13.7944 0 18.7734L0 93.867C0 98.8461 2.22515 103.621 6.18593 107.142C10.1467 110.663 15.5187 112.64 21.1201 112.64H147.841C153.442 112.64 158.814 110.663 162.775 107.142C166.736 103.621 168.961 98.8461 168.961 93.867V18.7734C168.961 13.7944 166.736 9.0193 162.775 5.4986C158.814 1.97791 153.442 0 147.841 0H21.1201Z"
          fill="white" className="svg-path" />
        <path
          d="M21.1201 32.8535C21.1201 31.6088 21.6764 30.415 22.6666 29.5348C23.6568 28.6546 24.9998 28.1602 26.4001 28.1602H47.5202C48.9206 28.1602 50.2636 28.6546 51.2538 29.5348C52.244 30.415 52.8002 31.6088 52.8002 32.8535V42.2402C52.8002 43.485 52.244 44.6787 51.2538 45.5589C50.2636 46.4391 48.9206 46.9336 47.5202 46.9336H26.4001C24.9998 46.9336 23.6568 46.4391 22.6666 45.5589C21.6764 44.6787 21.1201 43.485 21.1201 42.2402V32.8535ZM21.1201 61.0136C21.1201 59.7689 21.6764 58.5751 22.6666 57.6949C23.6568 56.8147 24.9998 56.3203 26.4001 56.3203H79.2004C80.6007 56.3203 81.9437 56.8147 82.9339 57.6949C83.9241 58.5751 84.4804 59.7689 84.4804 61.0136C84.4804 62.2584 83.9241 63.4522 82.9339 64.3323C81.9437 65.2125 80.6007 65.707 79.2004 65.707H26.4001C24.9998 65.707 23.6568 65.2125 22.6666 64.3323C21.6764 63.4522 21.1201 62.2584 21.1201 61.0136ZM21.1201 79.787C21.1201 78.5423 21.6764 77.3485 22.6666 76.4683C23.6568 75.5882 24.9998 75.0937 26.4001 75.0937H36.9602C38.3605 75.0937 39.7035 75.5882 40.6937 76.4683C41.6839 77.3485 42.2402 78.5423 42.2402 79.787C42.2402 81.0318 41.6839 82.2256 40.6937 83.1057C39.7035 83.9859 38.3605 84.4804 36.9602 84.4804H26.4001C24.9998 84.4804 23.6568 83.9859 22.6666 83.1057C21.6764 82.2256 21.1201 81.0318 21.1201 79.787ZM52.8002 79.787C52.8002 78.5423 53.3565 77.3485 54.3467 76.4683C55.3369 75.5882 56.6799 75.0937 58.0803 75.0937H68.6403C70.0407 75.0937 71.3836 75.5882 72.3738 76.4683C73.364 77.3485 73.9203 78.5423 73.9203 79.787C73.9203 81.0318 73.364 82.2256 72.3738 83.1057C71.3836 83.9859 70.0407 84.4804 68.6403 84.4804H58.0803C56.6799 84.4804 55.3369 83.9859 54.3467 83.1057C53.3565 82.2256 52.8002 81.0318 52.8002 79.787ZM84.4804 79.787C84.4804 78.5423 85.0367 77.3485 86.0268 76.4683C87.017 75.5882 88.36 75.0937 89.7604 75.0937H100.32C101.721 75.0937 103.064 75.5882 104.054 76.4683C105.044 77.3485 105.6 78.5423 105.6 79.787C105.6 81.0318 105.044 82.2256 104.054 83.1057C103.064 83.9859 101.721 84.4804 100.32 84.4804H89.7604C88.36 84.4804 87.017 83.9859 86.0268 83.1057C85.0367 82.2256 84.4804 81.0318 84.4804 79.787ZM116.16 79.787C116.16 78.5423 116.717 77.3485 117.707 76.4683C118.697 75.5882 120.04 75.0937 121.441 75.0937H132.001C133.401 75.0937 134.744 75.5882 135.734 76.4683C136.724 77.3485 137.281 78.5423 137.281 79.787C137.281 81.0318 136.724 82.2256 135.734 83.1057C134.744 83.9859 133.401 84.4804 132.001 84.4804H121.441C120.04 84.4804 118.697 83.9859 117.707 83.1057C116.717 82.2256 116.16 81.0318 116.16 79.787Z"
          fill="white" className="svg-path" />
      </svg>)
    },
    {
      id: 3, label: "PayPal", blackIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 169 113" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M116.16 32.8535C116.16 31.6088 116.717 30.415 117.707 29.5348C118.697 28.6546 120.04 28.1602 121.44 28.1602H142.561C143.961 28.1602 145.304 28.6546 146.294 29.5348C147.284 30.415 147.841 31.6088 147.841 32.8535V42.2402C147.841 43.485 147.284 44.6787 146.294 45.5589C145.304 46.4391 143.961 46.9336 142.561 46.9336H121.44C120.04 46.9336 118.697 46.4391 117.707 45.5589C116.717 44.6787 116.16 43.485 116.16 42.2402V32.8535Z"
          fill="black" className="svg-path" />
        <path
          d="M21.1201 0C15.5187 0 10.1467 1.97791 6.18593 5.4986C2.22515 9.0193 0 13.7944 0 18.7734L0 93.867C0 98.8461 2.22515 103.621 6.18593 107.142C10.1467 110.663 15.5187 112.64 21.1201 112.64H147.841C153.442 112.64 158.814 110.663 162.775 107.142C166.736 103.621 168.961 98.8461 168.961 93.867V18.7734C168.961 13.7944 166.736 9.0193 162.775 5.4986C158.814 1.97791 153.442 0 147.841 0H21.1201ZM158.401 18.7734V65.7069H10.56V18.7734C10.56 16.2839 11.6726 13.8964 13.653 12.136C15.6334 10.3757 18.3194 9.3867 21.1201 9.3867H147.841C150.641 9.3867 153.327 10.3757 155.308 12.136C157.288 13.8964 158.401 16.2839 158.401 18.7734ZM147.841 103.254H21.1201C18.3194 103.254 15.6334 102.265 13.653 100.504C11.6726 98.7441 10.56 96.3566 10.56 93.867V84.4803H158.401V93.867C158.401 96.3566 157.288 98.7441 155.308 100.504C153.327 102.265 150.641 103.254 147.841 103.254Z"
          fill="black" className="svg-path" />
      </svg>),
      whiteIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 169 113" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M116.16 32.8535C116.16 31.6088 116.717 30.415 117.707 29.5348C118.697 28.6546 120.04 28.1602 121.44 28.1602H142.561C143.961 28.1602 145.304 28.6546 146.294 29.5348C147.284 30.415 147.841 31.6088 147.841 32.8535V42.2402C147.841 43.485 147.284 44.6787 146.294 45.5589C145.304 46.4391 143.961 46.9336 142.561 46.9336H121.44C120.04 46.9336 118.697 46.4391 117.707 45.5589C116.717 44.6787 116.16 43.485 116.16 42.2402V32.8535Z"
          fill="white" className="svg-path" />
        <path
          d="M21.1201 0C15.5187 0 10.1467 1.97791 6.18593 5.4986C2.22515 9.0193 0 13.7944 0 18.7734L0 93.867C0 98.8461 2.22515 103.621 6.18593 107.142C10.1467 110.663 15.5187 112.64 21.1201 112.64H147.841C153.442 112.64 158.814 110.663 162.775 107.142C166.736 103.621 168.961 98.8461 168.961 93.867V18.7734C168.961 13.7944 166.736 9.0193 162.775 5.4986C158.814 1.97791 153.442 0 147.841 0H21.1201ZM158.401 18.7734V65.7069H10.56V18.7734C10.56 16.2839 11.6726 13.8964 13.653 12.136C15.6334 10.3757 18.3194 9.3867 21.1201 9.3867H147.841C150.641 9.3867 153.327 10.3757 155.308 12.136C157.288 13.8964 158.401 16.2839 158.401 18.7734ZM147.841 103.254H21.1201C18.3194 103.254 15.6334 102.265 13.653 100.504C11.6726 98.7441 10.56 96.3566 10.56 93.867V84.4803H158.401V93.867C158.401 96.3566 157.288 98.7441 155.308 100.504C153.327 102.265 150.641 103.254 147.841 103.254Z"
          fill="white" className="svg-path" />
      </svg>)
    },
    {
      id: 3, label: "Apple Pay",
      blackIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 97 119" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M92.7564 62.8481C92.6999 53.2131 97.0653 45.9515 105.881 40.5971C100.95 33.5333 93.491 29.6482 83.6582 28.8994C74.3481 28.1648 64.1621 34.3244 60.4324 34.3244C56.4908 34.3244 47.4774 29.1537 40.3853 29.1537C25.7491 29.3798 10.1946 40.8231 10.1946 64.1054C10.1946 70.9856 11.452 78.0918 13.9667 85.4099C17.3291 95.0449 29.4506 118.652 42.0948 118.271C48.7065 118.115 53.3827 113.58 61.9864 113.58C70.3359 113.58 74.6589 118.271 82.0335 118.271C94.7907 118.087 105.754 96.6272 108.947 86.9639C91.8381 78.897 92.7564 63.3425 92.7564 62.8481ZM77.9083 19.7589C85.071 11.2541 84.4211 3.51214 84.2092 0.729004C77.88 1.09632 70.5619 5.03792 66.3943 9.88369C61.8028 15.0826 59.1044 21.5107 59.6836 28.7582C66.5214 29.2809 72.7658 25.7631 77.9083 19.7589Z"
          fill="black" className="svg-path" />
      </svg>),
      whiteIcon: (<svg className="img-fluid" width="150" height="120" viewBox="0 0 97 119" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M92.7564 62.8481C92.6999 53.2131 97.0653 45.9515 105.881 40.5971C100.95 33.5333 93.491 29.6482 83.6582 28.8994C74.3481 28.1648 64.1621 34.3244 60.4324 34.3244C56.4908 34.3244 47.4774 29.1537 40.3853 29.1537C25.7491 29.3798 10.1946 40.8231 10.1946 64.1054C10.1946 70.9856 11.452 78.0918 13.9667 85.4099C17.3291 95.0449 29.4506 118.652 42.0948 118.271C48.7065 118.115 53.3827 113.58 61.9864 113.58C70.3359 113.58 74.6589 118.271 82.0335 118.271C94.7907 118.087 105.754 96.6272 108.947 86.9639C91.8381 78.897 92.7564 63.3425 92.7564 62.8481ZM77.9083 19.7589C85.071 11.2541 84.4211 3.51214 84.2092 0.729004C77.88 1.09632 70.5619 5.03792 66.3943 9.88369C61.8028 15.0826 59.1044 21.5107 59.6836 28.7582C66.5214 29.2809 72.7658 25.7631 77.9083 19.7589Z"
          fill="white" className="svg-path" />
      </svg>)
    }
  ];

  return (
    <div className='container'>
      <p className='page-heading fs-20  '>Secure and Hassle-Free Payment Processing</p>

      <div className='mt-5'>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card border-0 bg-transparent`}
              onClick={() => handleCardChange(index)}
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className={`px-5 py-4 mb-2 rounded-4 box-shadow-custom ${selectedCard === index ? 'dark-purple-bg' : 'bg-transparent  border'}`}>
                  <div className="mb-3">
                    {selectedCard === index ? card.whiteIcon : card.blackIcon}
                  </div>
                  <div className="text-center">
                    <label className={`form-check-label fs-16 fw-400 ${selectedCard === index ? "text-white" : "text-dark"}`}>
                      {card.label}
                    </label>
                  </div>
                </div>
                <div className="form-check mt-3 cursor-pointer me-3" onClick={() => handleCardChange(index)}>
                  {selectedCard === index ?
                    <img src={checkboxFill} alt='icon' width={30} height={30} />
                    : <img src={checkboxEmpty} alt='icon' width={30} height={30} />
                  }
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='mx-2 d-flex justify-content-between'>
        <h2 className='fs-24 fw-600 my-3 '>Manage Cards</h2>
        <Link to="/add-new-payment-card"> <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2'  ><span className='fw-600 fs-15'>+</span>Add Card</Button></Link>
      </div>
      <div className="row my-3 ms-2">
        <div className="col-12 col-md-2 mb-3 d-flex align-items-center">
          <div className="form-check pt-2 p-sm-2 me-3 cursor-pointer">
            {checkedCard === "master" ?
              <img src={cardCheckbox} width={20} height={20} alt='' onClick={() => setCheckedCard('master')} /> :
              <img src={checkboxEmpty} width={20} height={20} alt='' onClick={() => setCheckedCard('master')} />
            }
          </div>
          <div className="svg-bg  rounded text-center border px-3 bg-white">
            <img src={masterCard} alt='' className='text-center' />
          </div>
        </div>
        <div className="col-12 col-md-8 mb-3">
          <input type="text" className="form-control py-3 rounded border payment-input" id="masterCard"
            placeholder=" &nbsp;  &nbsp; Master card   ****  3122" />
        </div>
        <div className="col-12 col-md-2 d-flex mb-4 pb-1 align-items-center">
          <Link className='text-decoration-none text-color-light ps-1 '>Remove</Link>
          <Link className='text-decoration-none dark-purple ps-2'>Edit</Link>
        </div>
      </div>
      <div className="row my-3 ms-2">
        <div className="col-12  col-md-2 mb-3 d-flex gap-0">
          <div className="form-check mt-2 p-sm-2 me-3 cursor-pointer">
            {checkedCard === "visa" ?
              <img src={cardCheckbox} width={20} height={20} alt='' onClick={() => setCheckedCard('visa')} /> :
              <img src={checkboxEmpty} width={20} height={20} alt='' onClick={() => setCheckedCard('visa')} />
            }
          </div>
          <div className="svg-bg   text-center border rounded px-3 bg-white ">
            <img src={visaCard} alt='' className='text-center' />
          </div>
        </div>
        <div className="col-12 col-md-8  mb-3">
          <input type="cardNumber" className="form-control py-3  rounded border   payment-input" id="masterCard"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visa   ****  2020" />
        </div>

        <div className="col-12 col-md-2 d-flex mt-md-2 d-flex mt-md-2  mb-3">
          <Link className='text-decoration-none text-danger'>Remove</Link>
          <Link className='text-decoration-none dark-purple ps-2'>Edit</Link>
        </div>
      </div>

      <h2 className='fs-24 fw-600 my-3'>Billing</h2>
      <div className="d-flex justify-content-between my-3 bg-light-purple px-4 rounded-2 pt-3  px-1  ">
        <p className='fs-14 fw-500'>Yearly Subscription</p>
        <p className='fs-14 fw-500'>290.95 CHF</p>
      </div>
      <div className='text-end mb-3'>
        <Button className=' fw-500 fs-15  btn-fill-color border-0 py-2'  > Checkout</Button>
      </div>

    </div>
  );
};

export default SubscriptionPlanPayment;

