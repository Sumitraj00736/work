import React from "react";

const SearchBar = () => {
  return (
    <div className="relative h-80 py-8 md:py-16 px-6 md:px-12 lg:px-24 xl:px-32"
    style={{
      backgroundColor: '#5F026E',

    }}>
      <h1
        className="font-medium text-center text-white text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-10 leading-tight"
        style={{
          fontFamily: "Poppins",
        }}
      >
        Join our newsletter to get the <br /> latest guides
      </h1>

      <div className="mt-6 md:mt-10 flex justify-center">
        <form className="flex items-center bg-white rounded-full shadow-lg overflow-hidden  h-16 max-w-lg">
          <div className="flex items-center px-3 md:px-4">
            <span className="relative">
              <img
                src="/images/Icon.png"
                alt="Email Icon"
                className="h-6 w-6"
              />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 px-2 md:px-4 rounded-r-full focus:outline-none text-gray-800"
              style={{ fontFamily: "Poppins", fontSize: "16px" }}
            />
          </div>
          <button
            type="submit"
            className="mr-4 md:ml-4 bg-yellow-300 py-3 px-4 md:px-6 rounded-full text-white hover:bg-yellow-400"
          >
            Submit
          </button>
        </form>
      </div>

     <img
        className="absolute top-[300px] mt-4 left-0"
        src="Images/Wave.1.png"
        alt=""
     />
    </div>
  );
};

export default SearchBar;
