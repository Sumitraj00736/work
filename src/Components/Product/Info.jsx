import React from 'react';

function Features() {
  return (
    <div className="bg-white p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold flex items-center">100%</h3>
          <h4 className="text-xl font-semibold mb-2 flex items-center">Comprehensive Loan Automation</h4>
          <p className="text-gray-500 relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 bg-slate-400 w-1 rounded-lg"
            ></span>
            Quarkfin offers a cloud-based lending management and loan origination software that streamlines the entire loan process, ensuring efficiency and accuracy.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold flex items-center">3.5x</h3>
          <h4 className="text-xl font-semibold mb-2 flex items-center">Fast, Secure, And Scalable</h4>
          <p className="text-gray-500 relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 bg-slate-400 w-1 rounded-lg"></span>
            With a focus on speed, security, and scalability, Quarkfin ensures that your lending operations can grow seamlessly while maintaining the highest standards of data protection.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold flex items-center">3.5x</h3>
          <h4 className="text-xl font-semibold mb-2 flex items-center">Integrated Services</h4>
          <p className="text-gray-500 relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 bg-slate-400 w-1 rounded-lg"></span>
            Quarkfin includes built-in document management, KYC verification, and alternative data services, providing a one-stop solution for all your lending needs.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold flex items-center">100%</h3>
          <h4 className="text-xl font-semibold mb-2 flex items-center">Innovative AI Solutions</h4>
          <p className="text-gray-500 relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 bg-slate-400 w-1 rounded-lg"></span>
            Utilizing advanced AI technologies, Quarkfin delivers unparalleled automation and insights, setting it apart from other loan automation solutions in the market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
