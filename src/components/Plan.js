import React from "react";
import SignUpButton from "./SignUpButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Plan = ({ plan }) => {
  return (
    <div className="section-plans">
      <div className="row">
        <div className="col span-1-of-3">
          <div className="plan-box">
            <h3>{plan.title}</h3>
            <div>
              <p className="plan-price">
               $ {plan.price} <span>/ month</span>
              </p>
              <p className="plan-price-meal">You get the following benefits</p>
            </div>
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="icon-small"/>
                  {plan.description}
                </li>
                <li>
                <FontAwesomeIcon icon={faCheck} className="icon-small"/>
                  {plan.order}
                </li>
                <li>
                <FontAwesomeIcon icon={faCheck} className="icon-small"/>
                  {plan.access}
                </li>
                <li>
                <FontAwesomeIcon icon={faCheck} className="icon-small"/>
                  {plan.delivery}
                </li>
              </ul>
            </div>
            <SignUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
