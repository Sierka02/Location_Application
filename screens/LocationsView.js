import { useContext, useState } from "react"
import { UserLocationsContext } from "../contexts/UserLocationsContext"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, PaperProvider, TextInput } from "react-native-paper"
import StarRating from "react-native-star-rating-widget"
import { addLocation } from "../firebase/FirestoreController"
import LocationList from "../components/LocationList"


export default function LocationsView() {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [rating, setRating] = useState(0)
    const [location, setLocation] = useState('')
    const locations = useContext(UserLocationsContext)
  
    return(
  
      <PaperProvider>
      <SafeAreaView style={{marginLeft: 5, marginRight: 5, gap: 3}}>
        <TextInput label={'Name'} value={name} onChangeText={setName}/>
        <TextInput label={'Description'} value={description} onChangeText={setDescription}/>

        <StarRating
        style={{padding: 15, backgroundColor: 'black'}}
        starSize={35}
        emptyColor="gray"
         rating={rating}
         onChange={setRating}
        />

      <LocationList locations={locations}/>
  
        <Button mode='contained' onPress={() => addLocation(name, description)}>Add new location</Button>
  
      </SafeAreaView>
      </PaperProvider>
    )
  
  }