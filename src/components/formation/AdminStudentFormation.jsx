import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Axios from 'axios'

export const AdminStudentFormation = () => {

  const [datas, setDatas] = useState([]);

  const [messageShowBoolean, setMessageShowBoolean] = useState(false)
  const [loadingShowBoolean, setLoadingShowBoolean] = useState(false)
  const [messageError, setMesssageError] = useState(null)

  // declare the async data fetching function
  const fetchData = async (formation) => {
    // get the data from the api
    const response = await Axios.get(`/api/v1/formation/list/${formation}`);

    setDatas(response.data.formations);
  };

  useEffect(() => {
    // call the function
    fetchData('all')
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="font-Poppins bg-PrimaryBlue">
        <NavBar />
      </div>


      <div className="section flex flex-col" style={{ marginTop: '50px' }}>
        <div className="-m-1.5 overflow-x-auto">
          <div className={`block text-sm font-semibold text-center text-pink-600 mb-5`}>
            {messageError && <p>{messageError}</p>}
          </div>

          {messageShowBoolean && (
            <div className={`bg-blue-50 border border-blue-200 text-sm text-center text-blue-600 rounded-md p-4 mb-5`}>
              <p>Vous serez redirigé vers le moyen de paiement dans quelques secondes.</p>
            </div>
          )}

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
                  onChange={(e) => {
                    if (e.target.value != '') {
                      fetchData(e.target.value)
                        // make sure to catch any error
                        .catch(console.error);
                    }
                  }}
                >
                  <option value="">Faire une selection</option>
                  <option value="Superviseur_QHSE">Superviseur QHSE</option>
                  <option value="Responsable_QHSE">Responsable QHSE</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Formation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom-Prenom</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre d'échéance</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant déja payé</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reste a payé</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type de formation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">


                  {datas.length > 0 ? (
                    datas.map((data, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{data.formation}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.studentInfo.nom}-{data.studentInfo.prenom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.montant}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.nombreEcheance}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.montantPaye}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.montant - data.montantPaye}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.type_formation}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <a className='mr-2' href={`http://localhost:5000/api/v1/image/${data.studentInfo.cni}`} target="_blank" rel="noopener noreferrer">
                          cni
                        </a>
                        <a href={`http://localhost:5000/api/v1/image/${data.studentInfo.bulletin}`} target="_blank" rel="noopener noreferrer">
                          buelletin
                        </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className='text-center'>
                        Datas Not Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
