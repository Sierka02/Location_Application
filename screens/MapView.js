import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

export default function showLocation() {


    const [loc, setLoc] = useState()
    const [place, setPlace] = useState('') 

    useEffect(() => {
        getLocation();
        async function getLocation(){
            let {status} = await Location.getForegroundPermissionsAsync()
            if(status !== 'granted' ){
                console.log('Geolocation failed, no permission granted')
                return;
            }

            const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest})
            setLoc({lat: location.coords.latitude, lon: location.coords.longitude})
        }

    }, [])
}