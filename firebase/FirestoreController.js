import { addDoc, collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./Config";


export function useFireLocations() {
    
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const q = query(collection(db, LOCATIONS_REF), orderBy('locationText'))

        onSnapshot(q, QuerySnapshot => {
            setLocations(QuerySnapshot.docs.map(doc=> {
                return { id: doc.id, ...doc.data()}
            }))
        })
    }, [])    
    
}   

export function addLocation(locationText, locationDesc) {
    addDoc( collection(db, LOCATIONS_REF), { locationDesc: locationDesc, locationText: locationText})
    .catch(error => console.log(error.message))
}