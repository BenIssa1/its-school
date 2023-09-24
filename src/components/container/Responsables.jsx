import React from 'react';
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from './courses/Accordion';

const Responsables = () => {
  return (
    <div className='section' id='teacher'>
        <div className="grid sm:grid-cols-2 place-items-center gap-8">
            {/* teacher information content */}
            <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] text-white mb-5">
                Mme(lle). <span className='text-SkyBlue'>Nom de la directrice</span> <br />Post à ITSchool
            </div>
            <p className='text-sm leading-7 text-PrimaryGray mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati hic consequatur? Cumque, porro ipsa. Laboriosam perspiciatis voluptatum odit et quibusdam commodi consequuntur, maiores sed non inventore accusantium illum corporis.
            </p>
            </div>
            {/* teacher img */}
            <div className="p-4 md:w-[500px] sm:row-start-1">
            <img src={teacher1} className='w-full border rounded-md' alt="" />
            </div>

            {/* teacher information content */}
            <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] text-white mb-5">
                M. <span className='text-SkyBlue'>Nom du directeur</span> <br /> Post à ITSchool
            </div>
            <p className='text-sm leading-7 text-PrimaryGray mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati hic consequatur? Cumque, porro ipsa. Laboriosam perspiciatis voluptatum odit et quibusdam commodi consequuntur, maiores sed non inventore accusantium illum corporis.
            </p>
            </div>
            {/* teacher img */}
            <div className="p-4 md:w-[500px] border rounded ">
            <img src={teacher2} className='w-full border rounded-md' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Responsables