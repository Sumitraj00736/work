import React, { useState, useEffect, useRef } from "react";
import '../../css/Slider.css'

const solutions = [
  {
    id: 1,
    title: "Lender Onboarding Solutions",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eveniet rerum voluptates doloremque recusandae quaerat alias aperiam quisquam. Fuga, sit.",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
  },
  {
    id: 2,
    title: "Document Management",
    content: "Lorem abd dolor sit amet consectetur adipisicing elit. Deserunt iusto repellendus odit dolor dolorem, ut assumenda laudantium beatae sequi voluptatem.",
    image: "https://cdn.educba.com/academy/wp-content/uploads/2019/09/What-is-Front-End-Developer.png",
  },
  {
    id: 3,
    title: "AI Assisted Underwriting",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto repellendus odit dolor dolorem, ut assumenda laudantium beatae sequi voluptatem.",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
  },
  {
    id: 4,
    title: "Contract Management",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto repellendus odit dolor dolorem, ut assumenda laudantium beatae sequi voluptatem.",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
  },
  {
    id: 5,
    title: "Payment Tracking",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto repellendus odit dolor dolorem, ut assumenda laudantium beatae sequi voluptatem.",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
  },
  {
    id: 6,
    title: "Contract Management",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto repellendus odit dolor dolorem, ut assumenda laudantium beatae sequi voluptatem.",
    image: "https://cdn.educba.com/academy/wp-content/uploads/2019/09/What-is-Front-End-Developer.png",
  },
];

const SolutionsComponent = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [currentSection, setCurrentSection] = useState(0);
  const [sliderTop, setSliderTop] = useState(0);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const button = buttonsRef.current[currentSection];
    if (button) {
      setSliderTop(button.offsetTop);
    }
  }, [currentSection]);

  const handleSolutionClick = (solution, index) => {
    setSelectedSolution(solution);
    setCurrentSection(index);
  };

  return (
    <>
      <div className="lg:mx-8 px-6 py-4 md:px-10 md:py-8">
        <h1
          className="font-bold text-3xl md:text-4xl leading-tight"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#5F026E",
            marginRight:'100px',
            left: '-100px'
          }}
        >
          What Solution Quarkfin Provide?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row p-4">
        
        {/* Left Sidebar */}
        <div className="relative ml-20 lg:w-1/3 pr-4">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              ref={(el) => (buttonsRef.current[index] = el)}
              className={`p-4 cursor-pointer block w-full text-left ${
                selectedSolution.id === solution.id
                  ? "bg-yellow-300 text-white"
                  : ""
              }`}
              onClick={() => handleSolutionClick(solution, index)}
            >
              {solution.title}
            </button>
          ))}

        <span className="absolute width-[6px] -ml-1 -left-5 h-[335px] top-0 transform translate-x-1/2 bg-slate-200 w-2 rounded-lg"></span>

          <div
            className="slider rounded-lg"
            style={{
              position: 'absolute',
              left: '-20px',
              width: '7px',
              height: '57px',
              backgroundcolor: '#5F026E',
              transition: 'top 0.3s',
              top: `${sliderTop}px`,

            }}
          >

          </div>
          <div className=" mt-12 -m-5  text-gray-500 transform -rotate-90 origin-left ">
            {(selectedSolution.id < 10 ? '0' : '') + selectedSolution.id}/06
          </div>
        </div>

       { /* Right Content */}
        <div className="relative  lg:w-1/3 pl-2 ml-25  mt-8 h-100">
          <img
            src={selectedSolution.image}
            alt=''
            className="mb-4"
          />
          <p>{selectedSolution.content}</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default SolutionsComponent;
