import { useEffect, useState } from "react"
import { View } from "react-native-reanimated/lib/typescript/Animated"
import * as Location from 'expo-location'
import { LOCATIONS_REF } from "../firebase/Config"


export default function showLocation(){
const [latitude, setLatitude] = useState(null)
const [longtitude, setLongtitude] = useState(null)

useEffect(() => {
    async function getLocation() {
        

        async function getLocation() {

            const { status } = await Location.requestForegroundPermissionsAsync()
        
            if (status !== 'granted') {
                return
            }
        
            const location = await Location.geocodeAsync('Quito')
        
            setLatitude(location[0].latitude)
            setLongtitude(location[0].longitude)
        }
    } getLocation()
}, [])

}
