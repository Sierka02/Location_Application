import { addDoc, collection, doc, onSnapshot, orderBy, query, QuerySnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db, LOCATIONS_REF, USERS_REF } from "./Config";


export function useFireLocations() {
    
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const q = query(collection(db, LOCATIONS_REF), orderBy('locationText'))

         onSnapshot(q, QuerySnapshot => {
            QuerySnapshot.docs.map(doc=> {
                return { id: doc.id, ...doc.data()}
            })
        })
    }, [])  
    
}   



export function addLocation(locationText, locationDesc, rating) {

    if (typeof locationText !== 'string' || typeof locationDesc !== 'string' || typeof rating !== 'number') {
        console.error("Invalid data types: ", { locationText, locationDesc, rating });
        return;
    }

    const subColRef = collection (db, USERS_REF, auth.currentUser.uid, LOCATIONS_REF)
    addDoc( subColRef, { locationText, locationDesc, rating })
        .catch(error => console.log(error))
         

}

export function updateItem(id, data) {
    const subColRef = collection(db, USERS_REF, auth.currentUser.uid, LOCATIONS_REF)

    updateDoc(doc(subColRef, id), data)
    .catch(error => console.log(error.message)
    )
}