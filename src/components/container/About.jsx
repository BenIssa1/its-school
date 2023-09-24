import React from 'react';
import about1 from "../../assets/About1.jpg";
import about2 from "../../assets/About2.jpg"

const About = () => {
  return (
    <div className='section' id='about'>
      <div className="grid md:grid-cols-2 gap-8 place-items-center mb-[100px]">
        {/* about img */}
        <div className="border-[3px] border-solid border-SkyBlue rounded-lg ">
          <img src={about1} alt="" className='p-4' />
        </div>
        <div className="">
          {/* About title */}
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white ">
            Les Meilleurs{" "}<br />
            <span className='text-SkyBlue'>Cours en Lignes</span>
          </div>
          <p className='text-sm text-SecondaryGray leading-7 mb-4'>
            Nous proposons des cours en ligne interactifs via l'application Zoom. Notre plateforme permet aux étudiants d'assister en direct aux cours dispensés par nos instructeurs qualifiés, tout en conservant un enregistrement des sessions pour un accès ultérieur et une révision aisée du contenu.

            {/*  */}
          </p>
          <button className='py-3 px-3 text-sm border border-solid border-white hover:bg-white rounded-lg font-bold text-white hover:text-PrimaryBlue transition duration-200'>
            Know More
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        {/* about img */}

        <div className="">
          {/* About title */}
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white ">
            Les Meilleurs{" "}<br />
            <span className='text-SkyBlue'>Cours en Présentiel</span>
          </div>
          <p className='text-sm text-SecondaryGray leading-7 mb-4'>
            Nous offrons des cours en présentiel, où les étudiants bénéficient d'une expérience d'apprentissage immersive et interactive. Nos instructeurs compétents guident les apprenants à travers des programmes de formation approfondis et personnalisés pour acquérir les compétences nécessaires dans leur domaine d'étude. Rejoignez-nous pour développer vos connaissances et compétences dans un environnement éducatif dynamique et en personne.

            {/*  */}
          </p>
          <button className='py-3 px-3 text-sm border border-solid border-white hover:bg-white rounded-lg font-bold text-white hover:text-PrimaryBlue transition duration-200'>
            Know More
          </button>
        </div>

        <div className="border-[3px] border-solid border-SkyBlue rounded-lg ">
          <img src={about2} alt="" className='p-4' />
        </div>
      </div>
    </div>
  )
}

export default About