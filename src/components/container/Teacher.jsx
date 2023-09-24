import React from 'react';
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.png";
import { accordions } from "../../Data";
import Accordion from './courses/Accordion';


const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        {/* teacher information content */}
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] text-white mb-5">
            Témoignage <span className='text-SkyBlue'>d'Etudiants</span> <br /> d'ITSchool
          </div>
          <p className='text-sm leading-7 text-PrimaryGray mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati hic consequatur? Cumque, porro ipsa. Laboriosam perspiciatis voluptatum odit et quibusdam commodi consequuntur, maiores sed non inventore accusantium illum corporis.
          </p>

        </div>
        {/* teacher img */}
        <div className="p-4 md:w-[500px] sm:row-start-1">
          <img src={student1} className='w-full border rounded-md' alt="" />
        </div>

        {/* teacher information content */}
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] text-white mb-5">
            Témoignage <span className='text-SkyBlue'>d'Etudiant</span> <br /> d'ITSchool
          </div>
          <p className='text-sm leading-7 text-PrimaryGray mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati hic consequatur? Cumque, porro ipsa. Laboriosam perspiciatis voluptatum odit et quibusdam commodi consequuntur, maiores sed non inventore accusantium illum corporis.
          </p>
          
        </div>
        {/* teacher img */}
        <div className="p-4 md:w-[500px] ">
          <img src={student2} className='w-full border rounded-md' alt="" />
        </div>
      </div>
      {/* Volet questions */}
      <div className="text-center text-white my-8 font-bold sm:text-[1.875rem] text-[1.5rem] ">
        Frequently <span className='text-SkyBlue'>Asked Question</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto ">
        {accordions.map(accordion => {
          return <Accordion key={accordion.id} {...accordion} />
        })}
      </div>
    </div>
  )
}

export default Teacher