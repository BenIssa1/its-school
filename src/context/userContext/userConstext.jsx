import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../../config/firebase-config'
import { createContext, useState } from 'react'
// import { useState } from 'react'

// const {nom_de_la_fonction} = useContext(le_context)
export const UserContext = createContext()

export function UserContextProvider(props) {

    const signUp = (email, pwd) => createUserWithEmailAndPassword (auth, email, pwd);

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);


    const [modalState, setModalState] = useState({
        signUp: true,
        signIn: false
    })

    const toggleModals = modal => {
        if (modal === 'signUp') {
            setModalState({
                signUp: true,
                signIn: false
            })
        } else if (modal === 'signIn') {
            setModalState({
                signUp: false,
                signIn: true
            })            
        } else  if (modal === 'close') {
            setModalState({
                signUp: false,
                signIn: false
            })
        }
    }
    return(
        <UserContext.Provider value={{signUp}}>
            {props.children}
        </UserContext.Provider>
    )
}