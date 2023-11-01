import React, {useState} from 'react'
import { signin } from "../../actions/userActions"
import { useDispatch } from "react-redux"
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios'

export const ForgotPassword = (props) => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const [messageShowBoolean, setMessageShowBoolean] = useState(false)
  const [buttonShowBoolean, setButtonShowBoolean] = useState(false)

  /* Import useDispatch */
  const dispatch = useDispatch();

  /* HandleForm Submit Function */
  const handleForm = async (data) => {
    const { email } = data

    setButtonShowBoolean(true)

    /* Call api register */
    axios.post('/api/v1/password/forgot', {
      email
    })
      .then(res => {

        setMessageShowBoolean(true)
        setButtonShowBoolean(false)
      })
      .catch(error => {
        let errorMe = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

        setButtonShowBoolean(false)

        window.alert(errorMe)
      })
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
          <h1 className='text-3xl text-center text-PrimaryBlue py-6 font-bold'>Mot de passe oublié</h1>

          {
            messageShowBoolean && (
              <div className="bg-blue-50 border mb-5 border-blue-200 text-sm text-blue-600 rounded-md p-4 mt-5" role="alert">
                Verifié votre email.
              </div>
            )
          }

          <form onSubmit={handleSubmit(handleForm)} method="post" className='py-6'>
            <div className="w-full px-1">

              <div className="relative mt-1 mb-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder='Enter your input here'
                  className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                  {...register('email', { required: true })}
                />
                <label
                  htmlFor="email"
                  className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                >
                  Email
                </label>
                <div className="block text-sm font-semibold text-pink-600 mt-4">
                  {errors.email?.type === 'required' && "Email est requis"}
                </div>

              </div>
            </div>


            {
              buttonShowBoolean ? (
                <div className="text-center">
                  <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white ">
                    <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                    Loading
                  </button>
                </div>

              ) : (
                <div className="text-center">
                  <button type="submit" className='py-2 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'>Envoyer</button>
                </div>
              )
            }

          </form>
        </div>
      </div>
    </div>
  )
}
