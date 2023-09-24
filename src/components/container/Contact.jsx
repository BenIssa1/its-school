import React from 'react';
import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className="text-center max-w-[600px] mx-auto ">
        <div className="sm:text-3xl text-2xl text-white capitalize font-bold mb-5">
          S'inscrire à <span className='text-SkyBlue'>la Newsletter</span>
        </div>
        <p className='text-sm leading-7 text-PrimaryGray'>
          Restez informés des dernières mises à jour, événements, et opportunités captivantes. Inscrivez-vous dès aujourd'hui pour ne rien manquer de notre communauté éducative dynamique et recevoir des informations exclusives directement dans votre boîte de réception.
        </p>
        {/* Newsletter Form */}
        <motion.form 
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.3}}
          className='mt-5' action="" method="post"
        >
          <input className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60' type="email" name="email" id="email" placeholder='Entrez votre email'/>
          <button className='text-sm bg-SkyBlue sm:p-3 p-2 shadow-sm text-white font-bold'>S'inscrire</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact