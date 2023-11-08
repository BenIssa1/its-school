import React from 'react';
import student1 from "../../assets/Techniciene.jpg";
import student2 from "../../assets/Hillary.jpg";
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
            La formation de superviseur QHSE à ITSchool a été une expérience transformative. Les formateurs compétents ont transmis leur savoir avec clarté. Les cours interactifs et les exercices pratiques ont renforcé ma compréhension des principes de la supervision QHSE. L'environnement d'apprentissage collaboratif et le soutien de l'équipe pédagogique ont été remarquables. Je me sens préparée et confiante pour relever les défis professionnels en tant que superviseur QHSE. Je recommande ITSchool à tous ceux qui recherchent une formation de qualité dans ce domaine.
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
          La formation de superviseur QHSE à ITSchool a dépassé toutes mes attentes. Les formateurs experts, les cours interactifs et les ressources de qualité m'ont permis d'acquérir les compétences nécessaires pour exceller dans ma carrière. Je recommande vivement ITSchool à tous ceux qui cherchent une formation de qualité dans le domaine de la supervision QHSE.
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