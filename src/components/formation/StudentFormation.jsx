import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import Axios from 'axios'

export const StudentFormation = () => {
   
    const [datas, setDatas] = useState([]);

    const [messageShowBoolean, setMessageShowBoolean] = useState(false)
    const [loadingShowBoolean, setLoadingShowBoolean] = useState(false)
    const [messageError, setMesssageError] = useState(null)

    // declare the async data fetching function
    const fetchData = async () => {
        // get the data from the api
        const response = await Axios.get(`/api/v1/student/formation/list`);

        setDatas(response.data.formations);
    };

    const reneval = async (formation, montant) => {
        setLoadingShowBoolean(true)
        await Axios.post(`/api/v1/reneval/student/formation`, {formation,montant})
        .then(res => { 
            setMessageShowBoolean(true)
            console.log(res)
        })
        .catch(error => {
            let errorMe = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            setMesssageError(errorMe)
            setLoadingShowBoolean(false)
            setMessageShowBoolean(false)
        })  
    }

    useEffect(() => {
        // call the function
        fetchData()
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
                            <p>Vous serez regiriger vers le moyen de paiement dans queques secondes.</p>
                        </div>
                )}
                
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Formation</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant deja paye</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre d'echeance</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reste d'echeance</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        

                        {datas.length > 0 ? (
                      datas.map((data, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{data.formation}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.montant}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.montantPaye}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.nombreEcheance}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{data.nombreEcheancePaye}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            
                                {data.nombreEcheance == data.nombreEcheancePaye ? (
                                    <span className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Solde</span>
                                ): (
                                    (loadingShowBoolean ? (
                                        messageShowBoolean ? (
                                            <span className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Apres le paiement rafrichier la page</span>
                                        ) : (
                                            <span className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Chargement...</span>
                                        )
                                    ) : (
                                        <button onClick={() => {reneval(data.formation, 100)}} className="text-blue-500 hover:text-blue-700">Payer la prochaine echeance</button>
                                    ))
                                    
                                )}
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
