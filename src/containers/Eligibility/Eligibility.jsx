import React from "react";

import Header from "../../components/Header/Header";

import "./Eligibility.scss";

import saflag from "../../assets/images/saflag.jpg";

const Eligibility = () => {
    return (
        <div className="eligibility">
            <Header title={"Eligibility"} background={saflag} />

            <p className="eligibility__title">CAN I REPRESENT SOUTH AFRICA?</p>
            <p className="eligibility__subtitle">
                To be eligible to represent South Africa and the TagBOKS, the
                following selection criteria is a non-negotiable for all
                players:
            </p>
            <div className="eligibility__list">
                <ul>
                    <li>Attend 75% of training sessions (21/28)</li>
                    <li>
                        Achieve a minimum of 80% in the International Tag
                        Federation rules test (rules available in Player Hub)
                    </li>
                    <li>
                        Meet the fitness criteria to be held monthly from
                        January 2023
                    </li>
                    <li>
                        Uphold the behaviours as set out in the Code of Conduct
                        at all times
                    </li>
                    <li>
                        Hold a valid South African Passport OR South African
                        Birth Certificate
                    </li>
                    <li>
                        Not have represented another nation within the previous
                        12 months
                    </li>
                    <li>
                        Age criteria for players in the Mixed Seniors category
                        are:
                        <ul>
                            <li>Men born on or before 31/12/1990</li>
                            <li>Women born on or before 31/12/1993</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Eligibility;
