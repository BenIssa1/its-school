import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { signin } from "../../actions/userActions"

const Profile = (props) => {

  const [messageShowBoolean, setMessageShowBoolean] = useState(false)
  const [messageShowBooleanInfos, setMessageShowBooleanInfos] = useState(false)

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const history = useHistory()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm()

  /* Import useDispatch */
  const dispatch = useDispatch();

  /* HandleForm Update password Submit Function */
  const handleFormUpdatePassword = async (data) => {
    const { password, comfirmPassword, oldPassword } = data

    /* Call api register */
    axios.put(`/api/v1/password/update`, {
      oldPassword: oldPassword,
      newPassword: password,
      confirmPassword: comfirmPassword
    })
      .then(res => {

        const email = res.data.user.email
        setMessageShowBoolean(true)

        setTimeout(function () {
          /* dispatch action for signin */
          dispatch(signin(email, password));
        }, 2000)

      })
      .catch(error => {
        let errorMe = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

        window.alert(errorMe)

      })
  }

  /* HandleForm Submit Function */
  const handleFormStudentInfos = async (data) => {

    const { nom, prenom, numero, numero_rue, ville, region, code_postal } = data

    /* Call api register */
    axios.put(`/api/v1/student/update`, {
      nom, prenom, numero, numero_rue, ville, region, code_postal
    })
      .then(res => {
        setMessageShowBooleanInfos(true)

        setTimeout(function () {
          history.push("/")
        }, 2000)
      })
      .catch(error => {
        let errorMe = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

        console.log(errorMe)
      })
  }

  useEffect(() => {

    /* Call api register */
    axios.get(`/api/v1/student/details`)
      .then(res => {
        const {
          nom, prenom, numero, numero_rue, ville, region, code_postal
        } = res.data.studentInfoDetails

        setValue('nom', nom)
        setValue('prenom', prenom)
        setValue('numero', numero)
        setValue('numero_rue', numero_rue)
        setValue('ville', ville)
        setValue('region', region)
        setValue('code_postal', code_postal)
      })
      .catch(error => {
        let errorMe = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

        console.log(errorMe)
      })

  }, [])

  return (
    <>
      <div className='bg-PrimaryGray font-Poppins'>
        <div className="w-full sm:flex sm:w-3/4 mx-auto my-8">
          <div className="bg-white  sm:w-2/3 mx-auto p-6 sm:px-20 pb-4">

            {
              messageShowBooleanInfos && (
                <div className="bg-blue-50 border mb-5 border-blue-200 text-sm text-blue-600 rounded-md p-4 mt-5" role="alert">
                  Information modifié avec succes !.
                </div>
              )
            }

            {userInfo && (
              userInfo.user.role != 'admin' && (
                <>
                  <h1 className='text-3xl text-PrimaryBlue py-6 font-bold'>Modification des informations</h1>


                  <hr className='-mx-20' />

                  {/* Le formulaire */}
                  <div className="py-8">
                    <form onSubmit={handleSubmit(handleFormStudentInfos)}>
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
                                {...register('nom')}
                              />
                              <label
                                htmlFor="firstName"
                                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                              >
                                Nom
                              </label>
                              <div className={`block text-sm font-semibold text-pink-600 mt-4`}>
                                {errors.nom && <p>{errors.nom.message}</p>}
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
                                {...register('prenom')}
                              />
                              <label
                                htmlFor="lastName"
                                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                              >
                                Prénom(s)
                              </label>
                              <div className={`block text-sm font-semibold text-pink-600 mt-4`}>
                                {errors.prenom && <p>{errors.prenom.message}</p>}
                              </div>
                            </div>
                          </div>

                          <div className="w-full px-1">

                            <div className="relative mt-1 mb-6">
                              <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"

                                placeholder='Enter your input here'
                                className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                {...register('numero')}
                              />
                              <label
                                htmlFor="phoneNumber"
                                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                              >
                                Numéro de téléphone
                              </label>
                              <div className="block text-sm font-semibold text-pink-600 mt-4">
                                {errors.numero && <p>{errors.numero.message}</p>}
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
                                {...register('numero_rue', { required: false })}
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
                                {...register('ville')}
                              />
                              <label
                                htmlFor="town"
                                className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                              >
                                Ville
                              </label>
                              <div className="block text-sm font-semibold text-pink-600 mt-4">
                                {errors.ville && <p>{errors.ville.message}</p>}
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
                                {...register('region', { required: false })}
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
                                {...register('code_postal', { required: false })}
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
                        <Link to={"/"} type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'>Retour</Link>

                        <button type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'> Modifier</button>

                      </div>

                    </form>

                  </div>
                </>
              )
            )}


            <hr className='-mx-20' />

            <h1 className='text-3xl text-PrimaryBlue py-6 font-bold'>Modification du mot de passe</h1>

            {
              messageShowBoolean && (
                <div className="bg-blue-50 border border-blue-200 text-sm text-blue-600 rounded-md p-4 mt-5" role="alert">
                  Mot de passe modifié avec succes !.
                </div>
              )
            }

            <div className="py-8">
              <form onSubmit={handleSubmit(handleFormUpdatePassword)} method="post">

                <div className="py-8">

                  <div className="flex  flex-wrap mb-5">
                    <div className="w-1/2 px-1">

                      <div className="relative mt-1 mb-6">
                        <input
                          type='password'
                          name="oldPwd"
                          id="oldPwd"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('oldPassword', { required: false, minLength: 6 })}
                        />
                        <label
                          htmlFor="pwd"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          Old password
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                          {errors.oldPassword?.type === 'required' && "oldPassword is required"}
                          {errors.oldPassword?.type === 'minLength' && "oldPassword is ess"}
                        </div>

                      </div>

                    </div>

                    <div className="w-1/2 px-1">
                      <div className="relative mt-1 mb-6">
                        <input
                          type='password'
                          name="newPwd"
                          id="newPwd"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('password', { required: false, minLength: 6 })}
                        />
                        <label
                          htmlFor="newPwd"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          New Password
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                          {errors.password?.type === 'required' && "Password is required"}
                          {errors.password?.type === 'minLength' && "Password is ess"}
                        </div>
                      </div>
                    </div>

                    <div className="w-full px-1">

                      <div className="relative mt-1 mb-6">
                        <input
                          type='password'
                          name="comfirmPassword"
                          id="comfirmPassword"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('comfirmPassword', { required: false, minLength: 6 })}
                        />
                        <label
                          htmlFor="pwd"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          Comfirm Password
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                          {errors.comfirmPassword?.type === 'required' && "Password is required"}
                          {errors.comfirmPassword?.type === 'minLength' && "Password is ess"}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="text-center flex justify-center items-center gap-2">
                  <Link to={"/"} type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'>Retour</Link>

                  <button type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'> Modifier mot de passe</button>

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