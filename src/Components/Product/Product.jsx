import React from 'react';
import "../../css/Product.css";

export default function Product() {
    return (
        <div className="product-container">
            <div className="hero-container relative top-[200px] md:top-[100px] px-4">
                <h1 className="hero-title mx-auto text-3xl md:lg:text-5xl text-center ">
                    AI Powered Loan Automation Solution
                </h1>
                <p className="text-lg mb-8">
                    Cloud based lending management and loan origination software
                </p>
                <section className=" relative top-[192px] w-full md:w-auto">
                    <img
                        className="absolute top-[35px]"
                        src="images/colour-Background.png"
                        alt=""
                    />
                    <span
                        className="absolute top-60 transform -translate-x-1/2 -translate-y-80 left-1/2 phone"
                        style={{ width: "17%", maxWidth: "300px" }}
                    >
                    </span>
                    <span
                        className="absolute top-[-40px] left-[0] windows-left"
                        style={{ width: "40%", maxWidth: "310px" }}
                    >
                    </span>
                    <span
                        className="absolute top-[-30px] right-2 md:right-[-100px] windows-right"
                        style={{ width: "40%", maxWidth: "310px" }}
                    >
                    </span>
                </section>
            </div>
        </div>
    );
}
