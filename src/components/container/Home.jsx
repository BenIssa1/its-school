import React from 'react';
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom/cjs/react-router-dom';

// les constantes pour l'animation motion
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChidren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0},
    visible: {y: 0, opacity: 1},
  };
  return (
    // Bannière Total
    <div className='section' id='home'>
      <div className="md:flex items-center justify-center">
        <div className="md:flex items-center">
          <div className="">
            <div className="font-bold text-xs text-SkyBlue mb-4">
              {" "}
              your e-learning partner
            </div>
            {/* Information dans la Bannière */}
            <div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-DesaturateGold ">
              International<br /> Trainning <br /> School.CI-DG
            </div>
            <p className="text-sm leading-7 text-PrimaryGray max-w-sm">
              Représenter en Côte d'Ivoire dépuis octobre 2019, International Training School (IT SCHOOL) & Dynamique Group Sarl (ITS & DG), est un cabinet de formation professionnel international.
            </p>
            <div className="mt-6">
              <Link to={"signup"} className='px-6 py-3 font-bold text-white hover:border hover:border-solid hover:border-white bg-SkyBlue hover:bg-transparent rounded-lg mr-4 text-sm transition duration-300'>
                Démarer
              </Link>
              {/* <button className='px-6 py-3 font-bold text-white border border-solid border-white hover:border-SkyBlue hover:bg-SkyBlue rounded-lg text-sm transition duration-300'>
                Découvrir
              </button> */}
            </div>
          </div>
          {/* Banner img */}
          <div className="md:w-[60%]">
            <img src={hero} width="100%" alt="banner_img" />
          </div>
        </div>
        
      </div>
      {/* ours Colaborations */}
      <div className="">
        <p className='text-center text-xl text-white'>
          nous colaborons avec{" "}
          <span className='text-SkyBlue'>04+ destinations</span>
        </p>
        <motion.div variants={container} initial="hidden" whileInView="visible" className="flex items-center justify-center flex-wrap gap-8 p-2">
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className='w-full object-cover' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home