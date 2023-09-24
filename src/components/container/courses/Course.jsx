import React from 'react';
import {AiOutlineUser, AiOutlineStar} from "react-icons/ai";

const Course = ({image, category, title, participants, rating, price}) => {
  return (
    <div className='p-2 shadow-lg min-w-[15rem] bg-white gap-1 rounded-md'>
        <img src={image} alt=""/>
        <div className='mt-2 text-xs text-SkyBlue'> {category} </div>
        <div className='text-sm mt-2 font-bold'> {title} </div>

        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className="bg-Solitude p-1 rounded-full">
                    <AiOutlineUser className='text-SkyBlue' />
                </div>
                <div className="text-sm font-semibold">{participants}</div>
            </div>
            <div className="flex items-center gap-2">
                <div className="bg-Solitude p-1 rounded-full">
                    <AiOutlineStar className='text-yellow' />
                </div>
                <div className="text-sm font-semibold">{rating}</div>
            </div>
            <div className="text-sm font-semibold">XOF {price}</div>
        </div>
    </div>
  )
}

export default Course