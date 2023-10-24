import React from 'react'
import { signin } from "../../actions/userActions"
import { useDispatch } from "react-redux"
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export const SignIn = (props) => {

   

     const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm()

    /* Import useDispatch */
    const dispatch = useDispatch();
    
    /* HandleForm Submit Function */
    const handleForm = async (data) => {
       const {email, password} = data

        /* dispatch action for signin */
        dispatch(signin(email, password));
    }


  return (
    <div className='flex justify-between items-center container mx-auto h-screen px-2'>

        <div className={"w-1/3"}>
            <img 
                src={"/images/connexionImg.jpg"} 
                alt="" 

            />
        </div>

        <div className="w-[600px] border border-slate-200 rounded z-10">
            <div className="px-2 w-[500px] mx-auto">
                <h1 className='text-3xl text-center text-PrimaryBlue py-6 font-bold'>Connexion</h1>
                <span className={" block font-semibold text-center"}>Vous n'êtes pas encore inscris? <Link to={"./signup"} className={"text-blue-600"} >inscrivez-vous</Link> </span>
                <form onSubmit={handleSubmit(handleForm)} method="post" className='py-6'>
                    <div className="w-full px-1">
                        
                        <div className="relative mt-1 mb-6">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder='Enter your input here' 
                                className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'                
                                {...register('email', {required: true})}
                            />
                            <label 
                                htmlFor="email" 
                                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                            >
                                Email
                            </label>
                            <div className="block text-sm font-semibold text-pink-600 mt-4">
                            {errors.password?.type === 'required' && "Email is required"}
                            </div>
                            
                        </div>
                    </div>

                    <div className="relative mt-1 mb-6">
                        <input 
                            type='password' 
                            name="pwd" 
                            id="pwd"
                            placeholder='Enter your input here' 
                            className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                            {...register('password', {required: true, minLength: 6})}
                        />
                        <label 
                            htmlFor="pwd" 
                            className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                            Mot de passe
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                        {errors.password?.type === 'required' && "Password is required"}
                        {errors.password?.type === 'minLength' && "Password is ess"}
                        </div>
                    </div>

                    <div className="text-center">
                        <button   type="submit" className='py-2 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'>Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
