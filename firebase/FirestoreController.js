import { addDoc, collection, doc, onSnapshot, orderBy, query, QuerySnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./Config";


export function useFireLocations() {
    
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const q = query(collection(db, LOCATIONS_REF), orderBy('locationText'))

        const unsubscribe = onSnapshot(q, QuerySnapshot => {
            const newLocations = setLocations(QuerySnapshot.docs.map(doc=> {
                return { id: doc.id, ...doc.data()}
            }))

            console.log("Fetched Locations:", newLocations); // 🔥 Debugging
            setLocations(newLocations);
        })
        
    }, [])    
    
}   

export async function updateLocationRating(locationId, rating) {
    const locationRef = doc(db, LOCATIONS_REF, locationId);
    try {
        await updateDoc(locationRef, { rating: rating });
    } catch (error) {
        console.log("Error updating rating:", error);
    }
}



export function addLocation(locationText, locationDesc, rating) {

    if (rating < 1 || rating >5 || rating == undefined) {
        console.error("Rating must be between 1 and 5")
        return
    }

    addDoc( collection(db, LOCATIONS_REF), {  locationDesc,  locationText, rating})
    .catch(error => console.log(error.message))
}