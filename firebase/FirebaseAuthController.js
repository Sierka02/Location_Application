import { addDoc, collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { auth, db, LOCATIONS_REF, USERS_REF } from "./Config";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function useFireAuth() {
    const [user, setUser] = useState()
    const [locations, setLocations] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
            if(user){
                const subcolref = collection(db, USERS_REF, user.uid, LOCATIONS_REF)
                onSnapshot(subcolref, QuerySnapshot => {
                    setLocations(QuerySnapshot.docs.map(doc => {
                         return {id: doc.id, ...doc.data()}
                    }))
                })
            }
        })
    }, [])

    return [user, locations]

}


export async function loginUser(email, password){

    try {
        await signInWithEmailAndPassword(auth, email, password)
       
        } catch (error) {
            return error.message
        }
        return null
        
        
}


export function logoutUser() {
    signOut(auth)
        .catch(error => console.log(error.message))
   
}