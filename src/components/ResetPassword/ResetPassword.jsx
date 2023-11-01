import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

export const ResetPassword = (props) => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const [messageShowBoolean, setMessageShowBoolean] = useState(false)
  const [buttonShowBoolean, setButtonShowBoolean] = useState(false)

  let { token } = useParams();

  const history = useHistory()

  /* HandleForm Submit Function */
  const handleForm = async (data) => {
    const { password, comfirmPassword } = data

    setButtonShowBoolean(true)

    /* Call api register */
    axios.put(`/api/v1/password/reset/${token}`, {
      password: password,
      confirmPassword: comfirmPassword
    })
      .then(res => {

        setMessageShowBoolean(true)

        setTimeout(function () {
          history.push("/signin")
        }, 2000)
      })
      .catch(error => {
        let errorMe = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

        window.alert(errorMe)
        setButtonShowBoolean(false)
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
          <h1 className='text-3xl text-center text-PrimaryBlue py-6 font-bold'>Réinitialiser le mot de passe</h1>

          {
            messageShowBoolean && (
              <div className="bg-blue-50 border mb-5 border-blue-200 text-sm text-blue-600 rounded-md p-4 mt-5" role="alert">
                Mot de passe modifié avec succes !.
              </div>
            )
          }

          <form onSubmit={handleSubmit(handleForm)} method="post" className='py-6'>

            <div className="relative mt-1 mb-6">
              <input
                type='password'
                name="pwd"
                id="pwd"
                placeholder='Enter your input here'
                className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                {...register('password', { required: true, minLength: 6 })}
              />
              <label
                htmlFor="pwd"
                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
              >
                Nouveau mot de passe
              </label>
              <div className="block text-sm font-semibold text-pink-600 mt-4">
                {errors.password?.type === 'required' && "Le mot de passe est requis"}
                {errors.password?.type === 'minLength' && "Le mot de passe doit contenir au minimum 6 caractère"}
              </div>
            </div>

            <div className="relative mt-1 mb-6">
              <input
                type='password'
                name="comfirmPassword"
                id="comfirmPassword"
                placeholder='Enter your input here'
                className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                {...register('comfirmPassword', { required: true, minLength: 6 })}
              />
              <label
                htmlFor="pwd"
                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
              >
                Confirmer mot de passe
              </label>
              <div className="block text-sm font-semibold text-pink-600 mt-4">
                {errors.comfirmPassword?.type === 'required' && "Le mot de passe est requis"}
                {errors.comfirmPassword?.type === 'minLength' && "Le mot de passe doit contenir au minimum 6 caractère"}
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
