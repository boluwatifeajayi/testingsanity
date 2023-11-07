import React from 'react';
import logo from '../assets/images/footer-logo.png'
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#082630] text-white py-16 px-6 md:px-20">
      <div className="container mx-auto block md:flex flex-col md:flex-row justify-between">
        {/* Column 1: Logo */}
        <div className="mb-8 md:mb-0">
          <Image src={logo} alt="Logo"/>
          <p className='text-gray-200 mt-4 text-sm'>At Instig Labs, we believe that knowledge knows no<br/> bounds, and we're dedicated to fostering a vibrant <br/> community of brilliant minds.</p>
        </div>

        {/* Column 2: Menu */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2 text-[#2AACC9]
">Company</h3>
          <ul className='text-gray-200'>
            <li className='mb-3'>
              <a href="#">Who We Are</a>
            </li>
            <li className='mb-3'>
              <a href="#">Portfolio Companies</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2 text-[#2AACC9]">Connect</h3>
          <ul className='text-gray-200'>
            <li className='mb-3'>
              <a href="#">Instagram</a>
            </li>
            <li className='mb-3'>
              <a href="#">LinkedIn</a>
            </li>
            <li className='mb-3'>
              <a href="#">Twitter</a>
            </li>
            <li className='mb-3'>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#2AACC9]">Contact</h3>
          <p className='mb-3 text-gray-200'>hello@instiglabs.com</p>
          <p className='mb-3 text-gray-200'>+234908163718</p>
          <p className='mb-3 text-gray-200'>369, Borno Way, Alagomeji.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
