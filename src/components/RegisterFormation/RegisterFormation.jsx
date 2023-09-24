import React, {  useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios'
import {useHistory} from "react-router-dom"

const RegisterFormation = (props) => {

    
    const [requiredValidation, setRequiredValidation] = useState('')

    const [formation, setFormation] = useState("")
    const [type_formation, setTypeFormation] = useState("")
    const [messageShowBoolean, setMessageShowBoolean] = useState(false)
    const [buttonShowBoolean, setButtonShowBoolean] = useState(false)

    const [message, setMesssage] = useState(null)

    const history = useHistory();

    const handleForm = async (e) => {
        e.preventDefault();

        setButtonShowBoolean(true)
        setMesssage(null)

        axios.post('/api/v1/register/student/formation', {
            formation,
            type_formation,
            montant: 200,
            montantAPaye: 100,
            montantPaye: 0,
            nombreEcheance: 2,
            nombreEcheancePaye: 0
        })
        .then(res => { 
            setMessageShowBoolean(true)
            console.log(res)
        })
        .catch(error => {
            let errorMe = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            setMesssage(errorMe)
            setButtonShowBoolean(false)
        })  

     
    }

  return (
    <>
            <div className='bg-PrimaryGray font-Poppins'>
                <div className="w-full sm:flex sm:w-3/4 mx-auto my-8">
                    <div className="bg-white  sm:w-2/3 mx-auto p-6 sm:px-20 pb-4">
                        <h1 className='text-3xl text-PrimaryBlue py-6 font-bold'>Formulaire d'enrégistrement</h1>

                        <hr className='-mx-20' />

                        <div className={`block text-sm font-semibold text-center text-pink-600 mt-5`}>
                            {message && <p>{message}</p>}
                        </div>

                        {
                            messageShowBoolean && (
                                <div className="bg-blue-50 border border-blue-200 text-sm text-blue-600 rounded-md p-4 mt-5" role="alert">
                                    Vous serez regiriger vers le moyen de paiement dans queques secondes.
                                </div>
                            )
                        }

                        
                        {/* Le formulaire */}
                        <div className="py-8">
                            <form   onSubmit={handleForm} encType='multipart/form-data'>
                                {/* Information Personnel */}
                            

                                {/* Choix de la formation */}

                                <div className="py-8">
                                    
                                    <div className="flex  flex-wrap mb-5">
                                        <div className="w-full">
                                            <label 
                                                htmlFor="formation" 
                                                className={`block text-sm font-semibold text-gray`}
                                            >
                                                Choisir une formation
                                            </label>
                                            <div className="mt-1 w-full">
                                                <select
                                                    name="formation" 
                                                    id="formation"
                                                    className='appearance-none w-full border border-SecondaryGray px-4 py-2 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300'
                                                    onChange={(e) => { setFormation(e.target.value)}}
                                                    value={formation}
                                                >
                                                    <option value="">Faire une selection</option>
                                                    <option value="Superviseur_QHSE">Superviseur QHSE</option>
                                                    <option value="Responsable_QHSE">Responsable QHSE</option>
                                                    <option value="BNS_&_SI">BNS & SI</option>
                                                    <option value="Logiciel_Robot">Logiciel Robot</option>
                                                    <option value="Production_Pétrolière">Production Pétrolière</option>
                                                    <option value="Reservoir_Pétrolier">Reservoir Pétrolier</option>
                                                </select>
                                            </div>
                                            <div className="block text-sm font-semibold text-pink-600">
                                                {requiredValidation}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  flex-wrap">
                                        <div className="w-full">
                                            <label 
                                                htmlFor="formation" 
                                                className={`block text-sm font-semibold text-gray`}
                                            >
                                                Type de formation
                                            </label>
                                            <div className="mt-1 w-full">
                                                <select
                                                    name="formation" 
                                                    id="formation"
                                                    className='appearance-none w-full border border-SecondaryGray px-4 py-2 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300'
                                                    onChange={(e) => { setTypeFormation(e.target.value)}}
                                                    value={type_formation}
                                                >
                                                    <option value="">Faire une selection</option>
                                                    <option value="En_Ligne">En Ligne</option>
                                                    <option value="En_Présentiel">En Présentiel</option>
                                                </select>
                                            </div>
                                            <div className="block text-sm font-semibold text-pink-600">
                                                {requiredValidation}
                                            </div>
                                        </div>
                                    </div>

                                </div> 

                                <div className="text-center flex justify-center items-center gap-2">
                                    <Link  to={"/"} type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'>Retour</Link>

                                    {/* <button  type="submit" className='py-3 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'> paiement</button> */}
                                    {
                                        buttonShowBoolean ? (
                                            messageShowBoolean ? (
                                                <></>
                                            ) : (
                                                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white ">
                                                    <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                                                    Loading
                                                </button>
                                            )
                                        
                                        ): (
                                            <button  type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'> paiement</button>
                                        )
                                    }
                                    
                                </div>

                            </form>
                            
                        </div>
                    
                    </div>

                    
                    {/* Côté gauche */}

                    <div className="bg-PrimaryBlue hidden sm:block sm:w-1/3 text-white font-Poppins ">
                        {/* Intitulé */}
                        <div className="flex justify-between items-center p-6">
                            <div className="flex">
                                <img src="./ITS_&_DG.png" className='w-16 rounded-full' alt="" />
                            </div>
                            <div className="flex flex-col items-end text-OriginGold">
                                <h1 className='text-xl font-bold'>ITSchool GROUP</h1>
                                <p className='text-xs'>
                                    International Training School
                                </p>
                                
                            </div>
                            
                            
                        </div>
                        <div className="text-white flex items-center justify-end p-6 text-xs gap-2 font-thin absolute top-[90px] right-[160px]">
                            <p>
                                Agreed Number
                            </p>
                            <div className='w-[3px] h-[45px] bg-white'/> 
                            <div className="">
                                <p>61-298-16</p>
                                <p>B08136942015</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-8">
                            <div className="mt-10 p-5 flex flex-col items-center justify-center ">
                                <h1 className='text-[18px] font-semibold mb-8'>Nos Formations Populaires</h1>

                                <div className="mt-5 flex flex-col gap-6 ">
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                            <i className="fa-sharp fa-solid fa-shield"></i>
                                        </div>
                                        <p className='text-sm'>Superviseur QHSE | 200.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-solid fa-user-shield "></i>
                                        </div>
                                        <p className='text-sm'>Responsable QHSE | 300.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                            <i className="fa-solid fa-fire"></i>
                                        </div>
                                        <p className='text-sm'>BNS & SI | 100.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-brands fa-uncharted "></i>
                                        </div>
                                        <p className='text-sm'>Logiciel Robot | 150.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-solid fa-oil-well"></i>
                                        </div>
                                        <p className='text-'>Prod. Pétrolière | 150.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-sharp fa-solid fa-bottle-droplet"></i>
                                        </div>
                                        <p className='text-sm'>Réservoir Pétrolier | 150.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                </div>

                                {/* Amblème */}
                                <div className="mt-20">
                                    <h1 className='text-[18px] font-semibold'>Certificat Internationale</h1>
                                    
                                    <div className="mt-3">
                                        <p className='font-thin'>
                                            Herbergement pour les non résidents <br /> Cours du jours, du soirs & weekend
                                        </p>
                                        <h2 className='mt-2 text-OriginGold font-semibold'>Your success is our challenge</h2>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        {/* Nous contacté */}
                        <div className="mt-20">
                            <h1 className='text-[18px] font-semibold mb-8 text-center'>Nos Contacts</h1>

                            <div className="flex items-center p-3">
                                <div className="text-OriginGold">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className='pl-2 font-medium'>Lieu: Cocody 2 Plateau Cité Sanon</p>
                            </div>

                            <div className="flex items-center p-3">
                                <div className="text-OriginGold">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <p className='pl-2 font-xs'>+225 07 773 147 81 / 07 790 745 47</p>
                            </div>

                            <div className="flex items-center p-3">
                                <div className="text-OriginGold">
                                    <i className="fa-brands fa-whatsapp fa-lg"></i>
                                </div>
                                <p className='pl-2 font-medium'>+225 07 773 147 81</p>
                            </div>

                            <div className="flex items-center p-3 transition ease-in-out delay-150 hover:scale-110 ">
                                <a href="">
                                    <span className="text-OriginGold"><i className="fa-brands fa-facebook fa-lg"></i></span>
                                    <span className='pl-2 font-medium'>ITSCHOOL côte d'Ivoire</span>
                                </a>
                            </div>

                            
                            <div className="transition ease-in-out delay-150 hover:scale-110 p-3">
                                <a href="flex items-center"className=''>
                                    <span className='text-OriginGold pr-2'><i className="fa-solid fa-envelope"></i></span>
                                    <span className='font-medium text-[12.5px]'>Internationaltrainingschoolc@gmail.com</span>
                                </a>
                            </div>

                        
                            <div className="transition ease-in-out delay-150 hover:scale-110 flex items-center p-3">
                                <a href="flex items-center">
                                    <span className="text-OriginGold"><i className="fa-brands fa-linkedin fa-lg"></i></span>
                                    <span className='pl-2 font-medium text-[12.5px]'>International Training School Côte d'Ivoire</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                
                
            </div>

    </>

  )
}

export default RegisterFormation