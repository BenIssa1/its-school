import React, {  useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Profile = (props) => {


  return (
    <>
            <div className='bg-PrimaryGray font-Poppins'>
                <div className="w-full sm:flex sm:w-3/4 mx-auto my-8">
                    <div className="bg-white  sm:w-2/3 mx-auto p-6 sm:px-20 pb-4">
                        <h1 className='text-3xl text-PrimaryBlue py-6 font-bold'>Formulaire de Modification</h1>

                        <hr className='-mx-20' />
                        
                        {/* Le formulaire */}
                        <div className="py-8">
                            <form  encType='multipart/form-data'>
                                {/* Information Personnel */}
                            

                                {/* Choix de la formation */}

                                <div className="py-8">
                                    
                                    <div className="flex  flex-wrap mb-5">
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="firstName" 
                                                    id="firstName" 
                                                    placeholder='Enter your input here'
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    /* {...register('name')} */
                                                />
                                                <label 
                                                    htmlFor="firstName" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Nom
                                                </label>
                                                <div className={`block text-sm font-semibold text-pink-600 mt-4`}>
                                                    {/* {errors.name && <p>{errors.name.message}</p>} */}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="lastName" 
                                                    id="lastName" 
                                                    
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    /* {...register('prenom')} */
                                                />
                                                <label 
                                                    htmlFor="lastName" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Prénom(s)
                                                </label>
                                                <div className={`block text-sm font-semibold text-pink-600 mt-4`}>
                                                    {/* {errors.prenom && <p>{errors.prenom.message}</p>} */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    id="email" 
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'                
                                                    /* {...register('email')} */
                                                />
                                                <label 
                                                    htmlFor="email" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Email
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600 mt-4">
                                                    {/* {errors.email && <p>{errors.email.message}</p>} */}
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="phoneNumber" 
                                                    id="phoneNumber" 
                                                    
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    /* {...register('numero')} */
                                                />
                                                <label 
                                                    htmlFor="phoneNumber" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Numéro de téléphone
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600 mt-4">
                                                    {/* {errors.numero && <p>{errors.numero.message}</p>} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  flex-wrap">
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="streetNumber" 
                                                    id="streetNumber"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    /* {...register('numero_rue', {required: false})} */
                                                />
                                                <label 
                                                    htmlFor="streetNumber" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Numéro de Rue
                                                </label>
                                                <div className="">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="town" 
                                                    id="town"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                /*  {...register('ville')} */
                                                />
                                                <label 
                                                    htmlFor="town" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Ville
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600 mt-4">
                                                {/*  {errors.ville && <p>{errors.ville.message}</p>} */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                        
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="country" 
                                                    id="country"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                /*  {...register('region', {required: false})} */
                                                />
                                                <label 
                                                    htmlFor="country" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Etat/Region
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    type="text" 
                                                    name="zipCode" 
                                                    id="zipCode"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    /* {...register('code_postal', {required: false})} */
                                                />
                                                <label 
                                                    htmlFor="zipCode" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"

                                                >
                                                    Code Postal
                                                </label>
                                                <div className="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div> 

                                <div className="text-center flex justify-center items-center gap-2">
                                    <Link  to={"/"} type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'>Retour</Link>

                                    <button  type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'> paiement</button>
                                    
                                </div>

                            </form>
                            
                        </div>
                    
                    </div>

                    
                    {/* Côté gauche */}

                    
                </div>
                
                
            </div>

    </>

  )
}

export default Profile