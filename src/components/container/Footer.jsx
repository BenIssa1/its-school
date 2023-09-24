import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsLinkedin} from 'react-icons/bs';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{height: 0}}
      whileInView={{height: "auto"}}
      transition={{duration: 1}}
      className='bg-SkyBlue p-10' id='footer'
    >
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white'>
        <div className="">
          <div className="font-bold mb-6">Get Started</div>
          <p className='text-sm leading-7'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quisquam quis perferendis voluptates sed quod doloremque similique beatae sequi ab?
          </p>
        </div>
        <div className="">
          <div className="font-bold mb-8">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>Web Development</a>
            <a href="" className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>Web Design</a>
            <a href="" className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>Science</a>
            <a href="" className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>Digital Marketing</a>
          </div>
        </div>
        <div className="">
          <div className="font-bold mb-6">Partenaire</div>
          <div className="flex flex-col gap-4">
            <a href=""className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>IPSAS</a>
            <a href=""className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>OGIM</a>
            <a href=""className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>PCB</a>
            <a href=""className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>SIC5étoile</a>
            <a href=""className='text-sm hover:text-PrimaryBlue hover:font-semibold transition duration-200'>Groupe SAMA</a>
          </div>
        </div>
        <div className="">
          <div className="font-bold mb-6">Nous Suivre</div>
          <div className="text-sm mb-4">Internationaltrainingschoolc@gmail.com</div>
          <div className="text-sm">+225 07 773 147 81 / 07 790 745 47</div>
          <div className="flex gap-10 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100063736908460&mibextid=ZbWKwL" target='_blanc' className='hover:scale-110 text-xl'>
              <BsFacebook />
            </a>
            {/* <a href="" className='hover:scale-110 text-xl'>
            <BsInstagram />
            </a>
            <a href="" className='hover:scale-110 text-xl'>
            <BsTwitter />
            </a> */}
            <a href="https://www.linkedin.com/company/international-training-school-ci/" target='_blanc' className='hover:scale-110 text-xl'>
            <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer