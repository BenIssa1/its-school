import React from 'react';
import {categories} from "../../../Data";
import {courses} from "../../../Data";
import Categories from './Categories';
import Course from './Course';
import {motion} from "framer-motion";


const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className='section' id='courses'>
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5 text-white">
          Our Top <span className='text-SkyBlue'>Categories</span>
        </div>
        <p className='text-sm text-SecondaryGray leading-7  max-w-[700px] mx-auto'>          
          A ITSchool nous donnons un large éventail de possibilités d'apprentissage au sein de notre école, avec des programmes spécialisés tels que la gestion, l'extraction pétrolière, l'assurance qualité et les compétences polyvalentes en informatique. Enrichissez votre parcours académique avec des cours conçus pour préparer nos étudiants à des carrières diversifiées et prometteuses dans ces domaines d'avenir..
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4  sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map(category => {
          return <Categories key={category.id} {...category}/>
        })}
      </motion.div>
      {/* courses */}
      <div className="text-xl font-bold mt-32 text-white">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide ">
          {courses.map((course) => {
            return <Course key={course.id} {...course} /> 
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses