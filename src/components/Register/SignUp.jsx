import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Link } from "react-router-dom"
import { signinSignup } from "../../actions/userActions";
import { useDispatch } from "react-redux";


/* Schema Yup */
const schema = yup.object().shape({
  /* cni input validation */
  cni: yup.mixed()
    .test('required', "You need to provide a file cni", (value) => {
      return value && value.length
    })
    .test("type", "We only support jpeg", function (value) {
      if (value && value[0]) {
        if (value[0].type === "image/jpeg" || value[0].type === "image/png" || value[0].type === "image/jpg") {

          return true;
        }
      }
    }),
  /* bulletin input validation */
  bulletin: yup.mixed()
    .test('required', "You need to provide a file bulettin", (value) => {
      return value && value.length
    })
    .test("type", "We only support jpeg", function (value) {
      if (value && value[0]) {
        if (value[0].type === "image/jpeg" || value[0].type === "image/png" || value[0].type === "image/jpg") {

          return true;
        }
      }
    }),
  /* nname input validation */
  name: yup.string()
    .required("Name is required"),
  /* email input validation */
  email: yup.string()
    .required("Email is required"),
  /* prenom input validation */
  prenom: yup.string()
    .required("Prenom is required"),
  /* ville input validation */
  ville: yup.string()
    .required("Ville is required"),
  /* numero input validation */
  numero: yup.string()
    .required("Numero is required"),
  formation: yup.string()
    .required("Formation is required"),
  type_formation: yup.string()
    .required("Type of formation is required"),
  /* password input validation */
  password: yup.string()
    .required("Password is required")
    .min(6, 'Password must be at 3 char long'),
  /* comfirmPwd input validation */
  comfirmPwd: yup.string()
    .required("Password comfirm is required")
    .oneOf([yup.ref('password')], 'Passwords does not match')
});

const SignUp = (props) => {

  /* Use form variable */
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema)
  });

  const montants = {
    Superviseur_QHSE: 150.000
  }

  const [message, setMesssage] = useState(null)
  const [messageShowBoolean, setMessageShowBoolean] = useState(false)
  const [buttonShowBoolean, setButtonShowBoolean] = useState(false)

  /* Import useDispatch */
  const dispatch = useDispatch();

  /* HandleForm Submit Function */
  const handleForm = async (data) => {

    setButtonShowBoolean(true)
    setMesssage(null)

    /* form inputs variables */
    const {
      name,
      email,
      password,
      prenom,
      numero,
      numero_rue,
      ville,
      region,
      code_postal,
      cni,
      bulletin
    } = data

    /* form data variable */
    const formaData = new FormData()
    formaData.append('name', name)
    formaData.append('email', email)
    formaData.append('password', password)

    formaData.append('prenom', prenom)
    formaData.append('numero', numero)
    formaData.append('numero_rue', numero_rue)
    formaData.append('ville', ville)
    formaData.append('region', region)
    formaData.append('code_postal', code_postal)
    formaData.append('cni', cni[0])
    formaData.append('bulletin', bulletin[0])

    formaData.append('formation', 'Superviseur_QHSE')
    formaData.append('type_formation', 'En_Ligne')
    formaData.append('montant', 200)
    formaData.append('montantAPaye', 100)
    formaData.append('montantPaye', 0)
    formaData.append('nombreEcheance', 2)
    formaData.append('nombreEcheancePaye', 0)

    /* Call api register */
    axios.post('/api/v1/register', formaData)
      .then(res => {
        setMessageShowBoolean(true)

        setTimeout(function () {
          /* dispatch action for signin */
          dispatch(signinSignup(email, password));
        }, 15000)

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
            {/* <div className={`block text-sm font-semibold text-center text-pink-600 mt-5`}>
                        {message && <p>{message}</p>}
                    </div> */}

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
              <form onSubmit={handleSubmit(handleForm)} encType='multipart/form-data'>
                {/* Information Personnel */}
                <div className="mb-6">
                  <div className="flex mb-4">
                    <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>1</span>

                    <span className='font-bold text-PrimaryBlue '> Information Personnel</span>
                  </div>
                  <div className="flex flex-wrap ">
                    <div className="w-1/2 px-1">

                      <div className="relative mt-1 mb-6">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('name')}
                        />
                        <label
                          htmlFor="firstName"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          Nom
                        </label>
                        <div className={`block text-sm font-semibold text-pink-600 mt-4`}>
                          {errors.name && <p>{errors.name.message}</p>}
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
                    <div className="w-1/2 px-1">

                      <div className="relative mt-1 mb-6">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('email')}
                        />
                        <label
                          htmlFor="email"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          Email
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                          {errors.email && <p>{errors.email.message}</p>}
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
                    <div className="w-1/2 px-1">

                      <div className="relative mt-1 mb-6">
                        <input
                          type='password'
                          name="pwd"
                          id="pwd"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('password')}
                        />
                        <label
                          htmlFor="pwd"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          Mot de passe
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                          {errors.password && <p>{errors.password.message}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 px-1">
                      <div className="relative mt-1 mb-6">
                        <input
                          type='password'
                          name="verifPwd"
                          id="verifPwd"
                          placeholder='Enter your input here'
                          className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                          {...register('comfirmPwd')}
                        />
                        <label
                          htmlFor="verifPwd"
                          className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                        >
                          Mot de passe à nouveau
                        </label>
                        <div className="block text-sm font-semibold text-pink-600 mt-4">
                          {errors.comfirmPwd && <p>{errors.comfirmPwd.message}</p>}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <hr className='-mx-20' />

                {/* Adresse */}
                <div className="py-8">
                  <div className="flex mb-4">
                    <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>2</span>

                    <span className='font-bold text-PrimaryBlue '> Adresse</span>
                  </div>


                  <div className="flex flex-wrap">
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

                <hr className='-mx-20' />

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
                          {...register('formation')}
                          onChange={(e) => { console.log(montants[e.target.value]) }}
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
                        {errors.formation && <p>{errors.formation.message}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="flex  flex-wrap">
                    <div className="w-full">
                      <label
                        htmlFor="type_formation"
                        className={`block text-sm font-semibold text-gray`}
                      >
                        Type de formation
                      </label>
                      <div className="mt-1 w-full">
                        <select
                          name="formation"
                          id="type_formation"
                          className='appearance-none w-full border border-SecondaryGray px-4 py-2 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300'
                          {...register('type_formation')}
                        >
                          <option value="">Faire une selection</option>
                          <option value="En_Ligne">En Ligne</option>
                          <option value="En_Présentiel">En Présentiel</option>
                        </select>
                      </div>
                      <div className="block text-sm font-semibold text-pink-600">
                        {errors.type_formation && <p>{errors.type_formation.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <hr className='-mx-20' />


                {/* Documents à fournir */}


                <div className="py-8">
                  <div className="flex mb-4">
                    <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>4</span>

                    <span className='font-bold text-PrimaryBlue '> Documents à Fournire </span>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="w-1/2 px-1 ">

                      <label
                        htmlFor="cni"
                        className="text-xs sm:text-sm font-semibold text-gray mb-1"
                      >

                        <div className="mt-1">

                          <span
                            className={`block`}
                          >
                            Attestation d'Identité ou CNI
                          </span>
                          <input
                            type="file"
                            name="cni"
                            id="cni"
                            placeholder='Enter your input here'
                            accept='image/png, image/jpeg'
                            className='block w-full text-xs sm:text-sm  text-slate-500 sm:file:mr-4 sm:file:py-2 sm:file:px-4 file:rounded-full file:border-0 sm:file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                            {...register("cni")}
                          />
                        </div>
                      </label>
                      <div className={`block text-sm text-center mt-1 font-semibold text-pink-600 mt-4`}>
                        {errors.cni && <p>{errors.cni.message}</p>}
                      </div>

                    </div>
                    <div className="w-1/2 px-1">
                      <label
                        htmlFor="lastStudyReport"
                        className="block text-xs sm:text-sm font-semibold text-gray mb-1"
                      >

                        <div className="mt-1">
                          <span className='block '>
                            Dernier Bulletin Scolaire
                          </span>
                          <input
                            type="file"
                            name="lastStudyReport"
                            id="lastStudyReport"
                            placeholder='Enter your input here'
                            className='block w-full text-xs sm:text-sm  text-slate-500 sm:file:mr-4 sm:file:py-2 sm:file:px-4 file:rounded-full file:border-0 sm:file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                            {...register('bulletin')}
                          />
                        </div>
                      </label>
                      <div className={`block text-sm text-center mt-1 font-semibold text-pink-600 mt-4`}>
                        {errors.bulletin && <p>{errors.bulletin.message}</p>}
                      </div>

                    </div>


                  </div>





                </div>

                <div className="text-center flex justify-center items-center gap-2">
                  <Link to={"/"} type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'>Retour</Link>

                  {/* <button  type="submit" className='py-2 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'> paiement</button> */}
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

                    ) : (
                      <button type="submit" className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-PrimaryBlue text-white'>Paiement</button>
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
              <div className='w-[3px] h-[45px] bg-white' />
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
                <a href="flex items-center" className=''>
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

export default SignUp


