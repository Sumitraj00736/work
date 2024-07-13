import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative top-10 bg-transparent text-gray-800 py-8 mt-10">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="mb-6 md:mb-0 ml-7">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#5F026E' }}>Quarkfin</h2>
          <p className="text-sm">
            Quarkfin is an innovative AI-powered,<br /> cloud-based lending management <br /> solution designed to transform <br />the lending industry.
          </p>
          <div className="flex space-x-5 md:mt-4">
            <Link to="#" aria-label="Twitter" className="text-[#52525B] hover:text-gray-600">
              <img src="/images/twitter.png" alt="Twitter" className="h-2 w-2 md:h-4 md:w-4 mt-3" />
            </Link>
            <Link to="#" aria-label="Facebook" className="text-[#52525B] hover:text-gray-600">
              <img src="/images/facebook.png" alt="Facebook" className="h-2 w-2 md:h-4 md:w-4 mt-3" />
            </Link>
            <Link to="#" aria-label="Instagram" className="text-[#52525B] hover:text-gray-600">
              <img src="/images/instagram.png" alt="Instagram" className="h-2 w-2 md:h-4 md:w-4 mt-3" />
            </Link>
            <Link to="#" aria-label="GitHub" className="text-[#52525B] hover:text-gray-600">
              <img src="/images/github.png" alt="GitHub" className="h-2 w-2 md:h-4 md:w-4 mt-3" />
            </Link>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className=" mb-2" style={{ color: '#5F026E' }}>Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-[#52525B] hover:text-gray-600">About</Link></li>
            <li><Link to="/services" className="text-[#52525B] hover:text-gray-600">Our Services</Link></li>
            <li><Link to="/features" className="text-[#52525B] hover:text-gray-600">Features</Link></li>
            <li><Link to="/career" className="text-[#52525B] hover:text-gray-600">Career</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className=" mb-2" style={{ color: '#5F026E' }}>Help</h3>
          <ul className="space-y-2">
            <li><Link to="/support" className="text-[#52525B] hover:text-gray-600">Customer Support</Link></li>
            <li><Link to="/faq" className="text-[#52525B] hover:text-gray-600">Frequently Asked Questions</Link></li>
            <li><Link to="/terms" className="text-[#52525B] hover:text-gray-600">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="text-[#52525B] hover:text-gray-600">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-base mr-5" style={{ color: '#5F026E' }}>Quarkfin Address</h3>
          <address className="not-italic text-sm">
            Registered Office: A1307,<br />
            Gopalan Olympia, Kumbalagodu,<br />
            Bangalore, Karnataka,<br />
            India - 560074
          </address>
        </div>
      </div>
      <div className="flex mt-5 pt-4 text-center text-sm">
        <div className="flex justify-center space-x-8 mt-2 ml-12 md:space-x-8 md:ml-12 md:mt-2">
          <Link to="/about" className="text-[#52525B] hover:text-gray-600">About us</Link>
          <Link to="/contact" className="text-[#52525B] hover:text-gray-600">Contact</Link>
          <Link to="/sitemap" className="text-[#52525B] hover:text-gray-600">Sitemap</Link>
          <Link to="/terms" className="text-[#52525B] hover:text-gray-600">Terms of Use</Link>
        </div>
        <p className='absolute right-10 md:absolute md:right-10 md:bottom-8'>© 2024, Quarkfin. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
